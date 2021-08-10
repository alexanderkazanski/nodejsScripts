const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
	const stream = fs.createReadStream('./data.txt');
	stream.pipe(res);
}).listen(3000, () => console.log('running on 3000'));
