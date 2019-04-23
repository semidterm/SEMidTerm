const path = require('path');

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '..', '/views/MathFun.html'));
    });

    app.get('/MathFun.html', function (req, res) {
        res.sendFile(path.join(__dirname, '..', '/views/MathFun.html'));
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

    app.get('/public/images/true.png', (req,res) =>{
        res.sendFile(path.join(__dirname,'..', '/public/images/true.png'));
    })

    app.get('/public/images/true_2.png', (req, res) => {
        res.sendFile(path.join(__dirname, '..', '/public/images/true_2.png'));
    })

    app.get('/public/images/true_3.png', (req, res) => {
        res.sendFile(path.join(__dirname, '..', '/public/images/true_3.png'));
    })

    app.get('/public/images/true_4.png', (req, res) => {
        res.sendFile(path.join(__dirname, '..', '/public/images/true_4.png'));
    })

    app.get('/public/images/true_5.png', (req, res) => {
        res.sendFile(path.join(__dirname, '..', '/public/images/true_5.png'));
    })
}