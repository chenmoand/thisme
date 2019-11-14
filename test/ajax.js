const axios = require('axios');

axios.post('http://127.0.0.1:8080/addArticle',   {
    Author: "chenmo",
    Chick: 0,
    Classify: "java",
    Content: "java",
    Describe: "javajavajavajavajavajavajavajavajavajavajavajava",
    Label: ["java"],
    Replys: [{
        Name: "chenmo", // 姓名
        StartDate: new Date(), // 发布日期
        UpDate: new Date(), // 更新日期
        Content: "java", // 内容
    }],
    StartDate: new Date(),
    Title: "java",
    UpDate: new Date(),
}) .then( rs => {
    console.log(rs)
}).catch(err => console.log(err));