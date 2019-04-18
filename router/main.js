const path = require('path');

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '..', '/views/MathFun.html'));
    });

    app.get('/MathFun.html', function (req, res) {
        res.sendFile(path.join(__dirname, '..', '/views/MathFun.ejs'));
    });

    app.get('/Trangchu.html', (req, res) =>{
        res.sendFile(path.join(__dirname, '..', '/views/Trangchu.html'))
    });

    app.get('/Luyentap.html', (req, res) => {
        res.sendFile(path.join(__dirname, '..', '/views/Luyentap.html'))
    });

    app.get('/Demden10.html', (req, res) => {
        res.sendFile(path.join(__dirname, '..', '/views/Demden10.html'))
    });

    app.get('/Lienhe.html', (req, res) => {
        res.sendFile(path.join(__dirname, '..', '/views/Lienhe.html'))
    });

    
}