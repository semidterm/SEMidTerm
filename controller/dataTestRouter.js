const path = require('path');
const mysql = require('mysql');
module.exports.dataKiemtra = function (req, res) {
    var groupId = req.params.group;
    var conn = mysql.createConnection({
        database: 'new_schema',
        host: "localhost",
        user: "root",
        password: ""
    });

    conn.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });
    var sql = "Select * from cauhoikiemtra where groupID = '"+groupId+"' ";

    //var sql = "select * from cauhoiluyentap where groupID = '2' and chapterID = '1'";
    conn.query(sql, function (err, result) {
        console.log(result);
        if (err) throw err;
        res.json(result);
    });
};