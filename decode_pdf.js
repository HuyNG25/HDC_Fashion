const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const buf = fs.readFileSync(path.join(__dirname, '2023-12-28_Catalogue đồng phục_1.pdf'));

let searchPos = 0;
const cmaps = {};

// 1. First pass: find and parse all CMaps
while ((searchPos = buf.indexOf('stream', searchPos)) !== -1) {
  let start = searchPos + 6;
  if (buf[start] === 13 && buf[start+1] === 10) start += 2;
  else if (buf[start] === 10) start += 1;
  let end = buf.indexOf('endstream', start);
  if (end === -1) break;

  if (end - start < 100000) {
    try {
      const dec = zlib.inflateSync(buf.subarray(start, end)).toString('utf8');
      if (dec.includes('begincmap')) {
        // Parse bfchar
        const bfcharRegex = /<([0-9a-fA-F]+)>\s*<([0-9a-fA-F]+)>/g;
        let m;
        while ((m = bfcharRegex.exec(dec)) !== null) {
          const charCode = parseInt(m[2], 16);
          cmaps[m[1].toLowerCase()] = String.fromCharCode(charCode);
        }
        // Parse bfrange
        const bfrangeRegex = /<([0-9a-fA-F]+)>\s*<([0-9a-fA-F]+)>\s*<([0-9a-fA-F]+)>/g;
        while ((m = bfrangeRegex.exec(dec)) !== null) {
          const s = parseInt(m[1], 16);
          const e = parseInt(m[2], 16);
          let t = parseInt(m[3], 16);
          if (e - s < 500) {
            for (let c = s; c <= e; c++) {
              const hexKey = c.toString(16).padStart(m[1].length, '0').toLowerCase();
              cmaps[hexKey] = String.fromCharCode(t++);
            }
          }
        }
      }
    } catch(e) {}
  }
  searchPos = end + 9;
}

console.log('Total decoded CMap characters:', Object.keys(cmaps).length);

function decodeHex(hexStr) {
  let res = '';
  for (let i = 0; i < hexStr.length; i += 4) {
    const code = hexStr.substr(i, 4).toLowerCase();
    if (cmaps[code]) {
      res += cmaps[code];
    } else {
      res += ' ';
    }
  }
  return res;
}

// 2. Second pass: decode text streams
let fullText = '';
searchPos = 0;
let streamIndex = 0;

while ((searchPos = buf.indexOf('stream', searchPos)) !== -1) {
  streamIndex++;
  let start = searchPos + 6;
  if (buf[start] === 13 && buf[start+1] === 10) start += 2;
  else if (buf[start] === 10) start += 1;
  let end = buf.indexOf('endstream', start);
  if (end === -1) break;

  try {
    const raw = zlib.inflateSync(buf.subarray(start, end));
    if (raw.length < 2000000) { // skip huge font binaries
      const str = raw.toString('latin1');
      if (str.includes('BT') && str.includes('ET')) {
        let pageText = '';
        
        // Scan for hex text: <hex> Tj or TJ
        const tjMatches = str.match(/<([0-9a-fA-F\s]+)>\s*Tj/g) || [];
        for (const item of tjMatches) {
          const hex = item.replace(/[^0-9a-fA-F]/g, '');
          pageText += decodeHex(hex) + ' ';
        }

        const TJMatches = str.match(/\[(.*?)\]\s*TJ/gs) || [];
        for (const item of TJMatches) {
          const hexes = item.match(/<([0-9a-fA-F]+)>/g) || [];
          for (const h of hexes) {
            pageText += decodeHex(h.replace(/[<>]/g, ''));
          }
          pageText += ' ';
        }

        pageText = pageText.replace(/\s+/g, ' ').trim();
        if (pageText.length > 5) {
          fullText += `\n--- [PAGE/STREAM #${streamIndex}] ---\n` + pageText + '\n';
        }
      }
    }
  } catch(e) {}

  searchPos = end + 9;
}

fs.writeFileSync(path.join(__dirname, 'decoded_catalog.txt'), fullText, 'utf8');
console.log('Decoded catalog text saved! Total length:', fullText.length);
