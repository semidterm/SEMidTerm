const express = require('express');
const app = express();
const port = 3000

app.get('/', function (req, res) {
    res.sendfile(__dirname + '\\html\\MathFun.html');
});

app.post('/', function (req, res) {
    res.send('Got a POST request')
});

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

app.use(express.static('html'))
app.use(express.static('fonts'))
app.use(express.static('js'))
app.use(express.static('owl-carousel'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


