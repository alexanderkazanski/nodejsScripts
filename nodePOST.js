const https = require('https');

const data = new TextEncoder().encode(JSON.stringify(
  {
    userId: 1,
    title: 'over the moon with joy',
    body: 'but not to much that its weird'
  }
));

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  port: 443,
  path: '/posts',
  method: 'POST',
  headers: {
    'Content-Length': data.length,
    'Content-Type': 'application/json'
  }
}

const req = https.request(options, reqCallback);
req.on('error', errorCallback);
req.write(data);
req.end();


function errorCallback(error) {
  console.log(error);
}

function reqCallback(res) {
  res.on('data', dataCallback);

  function dataCallback(data) {
    process.stdout.write(data);
  }
}
