const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const outDir = path.join(__dirname, 'assets', 'images');
if (!fs.existsSync(path.join(__dirname, 'assets'))) fs.mkdirSync(path.join(__dirname, 'assets'));
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

const files = fs.readdirSync(__dirname);
const pdfFile = files.find(f => f.endsWith('.pdf'));
console.log('Reading PDF:', pdfFile);
const buf = fs.readFileSync(path.join(__dirname, pdfFile));

// 1. Extract JPEGs
const jpegHeader = Buffer.from([0xFF, 0xD8, 0xFF]);
const jpegFooter = Buffer.from([0xFF, 0xD9]);

let count = 0;
let pos = 0;
const extractedFiles = [];

while ((pos = buf.indexOf(jpegHeader, pos)) !== -1) {
  const end = buf.indexOf(jpegFooter, pos + 3);
  if (end !== -1) {
    const len = (end + 2) - pos;
    if (len > 8000) { // filter out icons/small graphics
      count++;
      const filename = `catalog_img_${String(count).padStart(2, '0')}.jpg`;
      const imgBuf = buf.subarray(pos, end + 2);
      fs.writeFileSync(path.join(outDir, filename), imgBuf);
      extractedFiles.push({ filename, sizeKB: Math.round(len / 1024) });
    }
    pos = end + 2;
  } else {
    pos += 3;
  }
}

console.log('Extracted', count, 'images:');
console.log(JSON.stringify(extractedFiles, null, 2));

// 2. Extract text streams from FlateDecode
const streamRegex = /stream\r?\n([\s\S]*?)\r?\nendstream/g;
let match;
let streamCount = 0;
let fullText = '';

let searchPos = 0;
const streamHeader = Buffer.from('stream');
const endStream = Buffer.from('endstream');

while ((searchPos = buf.indexOf(streamHeader, searchPos)) !== -1) {
  let dataStart = searchPos + 6;
  if (buf[dataStart] === 0x0d && buf[dataStart + 1] === 0x0a) dataStart += 2;
  else if (buf[dataStart] === 0x0a) dataStart += 1;

  const dataEnd = buf.indexOf(endStream, dataStart);
  if (dataEnd === -1) break;

  const streamData = buf.subarray(dataStart, dataEnd);
  try {
    const decompressed = zlib.inflateSync(streamData);
    const textStr = decompressed.toString('utf-8');
    // Look for text operators like (text) Tj or [(t)(e)(x)(t)] TJ
    const textMatches = textStr.match(/\((.*?)\)\s*Tj/g) || [];
    if (textMatches.length > 0) {
      fullText += textMatches.map(m => m.replace(/^\(/, '').replace(/\)\s*Tj$/, '')).join(' ') + '\n';
    }
  } catch (e) {
    // not all streams are flate or text
  }
  searchPos = dataEnd + 9;
}

fs.writeFileSync(path.join(__dirname, 'catalog_text.txt'), fullText);
console.log('Text extraction length:', fullText.length);
if (fullText.length > 0) {
  console.log('Sample text:', fullText.slice(0, 500));
}
