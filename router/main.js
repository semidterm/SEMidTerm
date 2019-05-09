const path = require('path');
var bodyParser = require("body-parser");
var mysql = require("mysql");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

     app.post("/lienhe",urlencodedParser,function(req,res){

        //--> Xử lí dữ liệu với phần liên hệ  <--//
        //Kết nối cơ sở dữ liệu  
        var conn = mysql.createConnection({
            database: 'new_schema',
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
        var sql = "INSERT INTO supportCustomer (name, phone, address, gmail, question) VALUES('"+names+"','"+phones+"','"+addresss+"','"+gmails+"','"+questions+"')";
        conn.query(sql, function(err, results) {
        if (err) throw err;
        console.log("completed");
         });
        res.sendFile(path.join(__dirname, '..', '/views/Lienhe.ejs'))
        
    });
    
    app.get("/data/:group/:chap",function(req, res){
    var groupId = req.params.group;
    var chapId = req.params.chap;

    var conn = mysql.createConnection({
        database: 'new_schema',
        host: "localhost",
        user: "root",
        password: "password"
    });

    conn.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });
    var sql = "Select * from cauhoiluyentap where groupID = '"+groupId+"' and chapterID = '"+chapId+"' ";

    //var sql = "select * from cauhoiluyentap where groupID = '2' and chapterID = '1'";
    conn.query(sql, function (err, result) {
        console.log(result);
        if (err) throw err;
        res.json(result);
    });
})

// }

