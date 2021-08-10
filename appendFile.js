const fs = require('fs');

fs.appendFile('./data.txt', '\ndata!', err => {
	if (err) {
		console.log("error: ", error);
	}
});
