const fs = require('fs');
const path = require('path');


const isFile = filename => fs.lstatSync(filename).isFile()

const data = fs.readdirSync('.').map(filename => {
	return path.join('.', filename);
}).filter(isFile);

console.log(data);
