const axios = require('axios');

const URL = 'https://jsonplaceholder.typicode.com/posts';

const json = {
  userId: 1,
  title: 'over the moon with joy',
  body: 'but not to much that its weird'
}

axios.post(URL, json).then(reqCallback);


function reqCallback(response) {
    return response.data
}
