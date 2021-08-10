const http = require('http');

const PORT = 3000
const HOSTNAME = '127.0.0.1'

const server = http.createServer(serverCallback);

function serverCallback(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("Its working!");
}

server.listen(PORT, HOSTNAME, () => {
    console.log(`server listening on port ${PORT}`)
})
