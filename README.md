"# tesseract_experiment" 

To run the program, do:

node tesseract.js

The program currently outputs its result to the console.

Changelog:
v0.1 Used synchronous fs.writeFileSync to output result to a file.

To implement:
- Attempt async fs.writeFile via promises.
- Make third command line argument the file/url name.
- link to database on Github instead of having it installed locally.
	- Save some locally just in case.