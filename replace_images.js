const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/<div class="hero__placeholder">[\s\S]*?<\/div>/, '<img src="assets/images/catalog_img_01.jpg" alt="Hero Banner" style="width:100%; height:100%; object-fit:cover; position:absolute; top:0; left:0;" />');

html = html.replace(/<div class="placeholder placeholder--promo">[\s\S]*?<\/div>/g, '<img src="assets/images/catalog_img_02.jpg" alt="Promo" style="width:100%; height:100%; object-fit:cover;" />');

let pSmCounter = 3;
while (html.includes('<div class="placeholder placeholder--promo-sm">')) {
  html = html.replace(/<div class="placeholder placeholder--promo-sm">[\s\S]*?<\/div>/, '<img src="assets/images/catalog_img_0' + pSmCounter + '.jpg" alt="Promo" style="width:100%; height:100%; object-fit:cover;" />');
  pSmCounter++;
}

let productCounter = 5;
while (html.includes('<div class="placeholder placeholder--product">')) {
  let imgNum = String(productCounter).padStart(2, '0');
  html = html.replace(/<div class="placeholder placeholder--product">[\s\S]*?<\/div>/, '<img src="assets/images/catalog_img_' + imgNum + '.jpg" alt="Product" style="width:100%; height:100%; object-fit:cover;" />');
  productCounter++;
  if (productCounter > 32) productCounter = 5;
}

let logoCounter = 20;
while (html.includes('<div class="placeholder placeholder--trust">')) {
  let imgNum = String(logoCounter).padStart(2, '0');
  html = html.replace(/<div class="placeholder placeholder--trust">[\s\S]*?<\/div>/, '<img src="assets/images/catalog_img_' + imgNum + '.jpg" alt="Logo" style="width:80px; height:80px; object-fit:contain;" />');
  logoCounter++;
}

fs.writeFileSync('index.html', html);
console.log('Images replaced!');
