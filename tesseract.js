const Tesseract = require('tesseract.js');
const  fs = require('fs');

// Input image and language options
// Language trained data must be downloaded from https://github.com/ryanfb/tesseract-ocr.tessdata
let filename = 'pic.png';
let language = 'eng';


Tesseract.recognize(filename, {
  lang: language})
  .progress(function  (p) { console.log('progress', p);  })
  .catch(err => console.error(err))
  .then(function (result) {
    console.log(result.text);
	fs.writeFileSync("text.txt", result.text );
	
    process.exit(0);
  });