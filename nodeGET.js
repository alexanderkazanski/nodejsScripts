const https = require('https');

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  port: 443,
  path: '/todos/1',
  method: 'GET'
}

const res = https.request(options, resCallback);
res.on('error', errorCallback);
res.end();


function errorCallback(error) {
  console.log(error);
 }


function resCallback(res) {
  console.log(`status code: ${res.statusCode}`);
  res.on('data', dataCallback);

  function dataCallback(data) {
    process.stdout.write(data);
  }
}