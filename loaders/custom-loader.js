const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// source: a string containing the content of the resource file (.js)
module.exports = function(source) {
  // regular expression for img tags
  //const imgRegex = /<img.*?src=(('(.*?)')|("(.*?)"))[^\>]*((\/>)|(><\/img>))/g;
  const imgRegex = /<img.*?src=(('(.*?)')|("(.*?)"))/g;

  let res = source;
  let match;
  // loop thru every img tag found
  while ((match = imgRegex.exec(source))) {
    res = res.replace(match[0], hash(match[0], match[3] || match[5]));
  }

  return res;
};

// add a hash to imagePath based on img content
function hash(imgTag, imgPath) {
  imgPath[0] === '.' ? (imgPath = imgPath.substr(1)) : imgPath;
  //console.log(imgPath);

  const fileName = `${path.resolve(__dirname, '../public')}${imgPath}`;
  // get Buffer of image content
  const s = fs.readFileSync(fileName);

  // create a hash string from buffer
  const hash = crypto
    .createHash('md5')
    .update(s)
    .digest('hex')
    .substr(0, 8);
  //console.log(hash);

  return imgTag.replace(imgPath, `${imgPath}?v=${hash}`);
}
