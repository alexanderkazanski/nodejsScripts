const fs = require('fs');
const path = '.';

fs.stat(path, callback);
// const stat = fs.statSync(path);

function callback(error, stat) {
	if (error) {
		console.log(error);
		return;
	}
	console.log(
	  stat.isFile(),
	  stat.isDirectory(),
	  stat.isSymbolicLink(),
	  stat.size // in bytes
	)
}
