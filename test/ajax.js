const axios = require('axios');

axios.post('http://127.0.0.1:8080/addArticle',   {
    author: "chenmo",
    chick: 0,
    classify: "java",
    content: "java",
    describe: "javajavajavajavajavajavajavajavajavajavajavajava",
    label: ["java"],
    replys: null,
    startDate: new Date(),
    title: "java",
    upDate: new Date(),
}) .then( rs => {
    console.log(rs)
}).catch(err => console.log(err));