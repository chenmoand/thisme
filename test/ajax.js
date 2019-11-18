const axios = require('axios');

axios.put('http://127.0.0.1:8080/updateArticle',   {
    articleId: "5dcd4149093b0e65c89c9841",
    author: "chenmo",
    chick: 0,
    classify: "java",
    content: "java",
    describe: "javajavajavajavajavajavajavajavajavajavajavajava",
    label: ["java"],
    replys: null,
    title: "java",
}) .then( rs => {
    console.log(rs)
}).catch(err => console.log(err));

/*
axios.delete('http://127.0.0.1:8080/deleteArticle?id=5dcd3d662829c1573047d80b')
.catch(res => {
    console.log(res)
})
.then(err => console.log(err));*/
