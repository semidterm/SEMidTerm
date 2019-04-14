const express = require('express');
const app = express();
const path = require('path');

const port = process.env.port || 3000;

require('./router/main')(app);
app.set('views', path.join(__dirname, '/views'));
// app.set('view engine', 'ejs');



app.listen(port, () => console.log(`Example app listening on port ${port}!`))