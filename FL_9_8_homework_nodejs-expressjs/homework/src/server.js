const express = require('express');
const port = 3000;
const app = express();
const router = require('./routes');
app.use('/', router);

app.listen(port, function () {
    console.log('Start...');
});