const axios = require('axios');

axios.get('http://localhost:9000/trips?q=https://www.wongnai.com/trips/travel-koh-cang')
    .then(res => {
        console.log(res.data);
    })
    .catch(error => {
        console.log(error)
    })