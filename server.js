const express = require('express');
const app = express();
const path = require('path');
const port = process.env.port || 3000;
const mysql = require('mysql');
var router = require( "./router/router.js");
// var morgan = require('morgan');
// //don't show the log when it is test
// if(process.env.NODE_ENV !== 'test') {
//     //use morgan to log at command line
//     app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
// }
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use("/", router);

app.listen(port, () => console.log(`App listening on port ${port}!`))
module.exports = app; //for test