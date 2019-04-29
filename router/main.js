const path = require('path');
var bodyParser = require("body-parser");
var mysql = require("mysql");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
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

    app.get('/Kiemtra.html', (req, res) => {
        res.sendFile(path.join(__dirname, '..', '/views/Kiemtra.html'))
    });

    app.get('/Giaitri.html', (req, res) => {
        res.sendFile(path.join(__dirname, '..', '/views/Giaitri.html'))
    });

    app.get('/De1.html', (req, res) => {
        res.sendFile(path.join(__dirname, '..', '/views/De1.html'))
    });

    app.get('/Congphamvi10.html', (req, res) => {
        res.sendFile(path.join(__dirname, '..', '/views/Congphamvi10.html'))
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
     
     app.post("/lienhe",urlencodedParser,function(req,res){

//--> Xử lí dữ liệu với phần liên hệ  <--//
      //Kết nối cơ sở dữ liệu  
        var conn = mysql.createConnection({
            database: 'data',
            host: "localhost",
            user: "root",
            password: "password"
        });
        conn.connect(function(err) {
            if (err) throw err;
        console.log("Connected!");
        });
       // Lấy dữ liệu từ phía client
        var names = req.body.name;
        var phones = req.body.phone;
        var addresss = req.body.address;
        var gmails= req.body.gmail;
        var questions = req.body.question;

        // Đưa dữ liệu vào cơ sở dữ liệu
        var sql = "INSERT INTO questionCustomer (name, phone, address, gmail, question) VALUES('"+names+"','"+phones+"','"+addresss+"','"+gmails+"','"+questions+"')";
        conn.query(sql, function(err, results) {
        if (err) throw err;
        console.log("completed");
         });
        res.sendFile(path.join(__dirname, '..', '/views/Lienhe.html'))
        
    });

}

