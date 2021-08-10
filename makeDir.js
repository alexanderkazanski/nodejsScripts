const fs = require('fs');

const path = "./test"

if (!fs.existsSync(path)) {
    fs.mkdirSync(path)
}

