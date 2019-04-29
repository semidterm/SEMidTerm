const express = require('express');
const app = express();
const path = require('path');
const port = process.env.port || 3000;
const mysql = require('mysql');

app.use( express.static(path.join(__dirname,'public')))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
require('./router/main')(app);
app.set('views', path.join(__dirname, '/views'));
app.get('/data',(req, res)=>{

    var conn = mysql.createConnection({
        database: 'my_classicmodels',
        host: "localhost",
        user: "root",
        password: ""
    });

    conn.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });

    var sql = "Select * from luyentap";
    conn.query(sql, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
})

app.listen(port, () => console.log(`App listening on port ${port}!`))
