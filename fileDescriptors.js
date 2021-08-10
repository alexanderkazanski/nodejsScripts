const fs = require('fs');

const path = "/c/Users/alexa/OneDrive/Desktop/nodeTutorial";

fs.open(path, 'r', callback);

function callback(error, fd) {
	console.log('file descriptor stats: ' + fd);
}

// or

// const fd = fs.openSync(path, 'r');

