const express = require('express');

const app = express();

app.use(express.json());

app.get('/good-job', getData);


function getData(req, res) {
    console.log(req.body);   
    res.send('good job!');
}


app.listen(3000, () => {
    console.log("app running on localhost:3000")
})