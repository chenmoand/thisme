const axios = require('axios');

axios.delete("http://127.0.0.1:8080/api/articles/5e3e7dd728fcd55be60dee2b")
.then( rs => {
    console.log(rs)
}).catch(err => console.log(err));

