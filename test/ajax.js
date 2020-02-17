const axios = require('axios');

axios.put('http://127.0.0.1:8080/api/articles',   {
    articleId:"5e3e7d7828fcd55be60dee29",
    author: "chenmo",
    chick: 0,
    classify: "java",
    content: "java",
    describe: "老子最爱java哈哈哈哈哈哈",
    label: ["java"],
    replys: null,
    title: "java lalalall  al lal",
}) .then( rs => {
    console.log(rs.data)
}).catch(err => console.log(err));

/*
axios.delete('http://127.0.0.1:8080/deleteArticle?id=5dcd3d662829c1573047d80b')
.catch(res => {
    console.log(res)
})
.then(err => console.log(err));*/
