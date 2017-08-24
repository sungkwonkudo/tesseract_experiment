const Tesseract = require('tesseract.js');
const  fs = require('fs');
var filename = 'pic.png'


Tesseract.recognize(filename, {
  lang: 'jpn'})
  .progress(function  (p) { console.log('progress', p)  })
  .catch(err => console.error(err))
  .then(function (result) {
    console.log(result.text)
	fs.writeFileSync("text.txt", result.text )
	
    process.exit(0)
  })