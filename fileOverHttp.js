const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	const data = fs.readFileSync('./data.txt', 'utf8');
	res.end(data);
})

server.listen(3000, () => {
	console.log('running on http:localhost:3000');
})
