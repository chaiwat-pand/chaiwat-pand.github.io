const axios = require('axios')

axios.get("http://localhost:9000/trips")
    .then(res => {
        let data = res.data;
        data.forEach(val => {
            console.log(`title: ${val.title} \ndescription: ${val.description} \ntags: ${val.tags}\n`)
        })
        // .catch(error => {
        //     console.error(error);
        // })
    })