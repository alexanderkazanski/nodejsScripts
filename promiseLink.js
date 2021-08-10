const f1 = fetch("./data1.json")
const f2 = fetch("./data2.json")

const promises = Promise.all([f1, f2]).then((data) => {
	console.log(data);
})
