var bodyParser = require("body-parser");
var mysql = require("mysql");
const path = require('path');

module.exports.contact = function (req, res) {
        var conn = mysql.createConnection({
            database: 'new_schema',
            host: "localhost",
            user: "root",
            password: ""
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
        var sql = "INSERT INTO questioncustomer (name, phone, address, gmail, question) VALUES('"+names+"','"+phones+"','"+addresss+"','"+gmails+"','"+questions+"')";
        conn.query(sql, function(err, results) {
        if (err) throw err;
        console.log("completed");
         });
        // res.sendFile(path.join(__dirname, '..', '/views/Lienhe.ejs'))
    };