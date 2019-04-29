const express = require('express');
const app = express();
const path = require('path');

const port = process.env.port || 3000;
app.use( express.static(path.join(__dirname,'public')))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
require('./router/main')(app);
var bodyParser = require('body-parser');

app.get('/demden10data',(req, res)=>{
    let answer = [
    {
        groupID: 1,
        chapterID: 1,
        question: "3 + 5 = ?",
        result: "8"
    },
    {
        groupID: 1,
        chapterID: 2,
        question: "5 + 1 = ?",
        result: "6"
    },
    {
        groupID: 1,
        chapterID: 3,
        question: "1 + 1 = ?",
        result: "2"
    },
    {
        groupID: 1,
        chapterID: 2,
        question: "2 + 3 = ?",
        result: "5"
    },
    {
        groupID: 1,
        chapterID: 2,
        question: "3 + 4 = ?",
        result: "7"
    }
]
    res.json(answer);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))