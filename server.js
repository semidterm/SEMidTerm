const express = require('express');
const app = express();

app.use(express.json());

const port = process.env.port || 3000;

const answers = [
    { groupID : 1, chapterID: 1, result: 10},
    { groupID : 2, chapterID: 1, result: 5},
    { groupID : 3, chapterID: 1, result: 6},
];

app.get('/:groupID', function (req, res) {
    const answer = answers.find(c => c.groupID === parseInt(req.params.groupID))
    if(!answer) {
        res.status(404).send("The answer with the given groupID was not found")
    }
    res.send(answer);
});

app.get('/api', function(req,res) {
    res.send(answers);
})

app.post('/api', function (req, res) {
    const answer = {
        groupID   : 1,
        chapterID : 2, 
        result    : req.body.result
    };
    answers.push(answer);
    res.status(200).send(answers);
});

app.use(express.static('html'))
app.use(express.static('fonts'))
app.use(express.static('js'))
app.use(express.static('owl-carousel'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))