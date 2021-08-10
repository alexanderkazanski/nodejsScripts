const fs = require('fs');

const path = './data.txt';

const pathData = fs.readFileSync(path, 'utf8')
console.log(pathData);

fs.readFile(path, 'utf8', (err, data) => {
    console.log(data);
})