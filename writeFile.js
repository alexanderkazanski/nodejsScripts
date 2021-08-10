const fs = require('fs');

fs.writeFile('./data.txt', 'data!', { flag: 'a+' }, (error) => {
	if (error) {
		console.log("error: ", error);
	}
})
const data = fs.readFileSync('./data.txt', 'utf8');
console.log(data);
