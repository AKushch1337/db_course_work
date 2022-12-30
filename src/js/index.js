const express = require('express');
const bodyParser = require('body-parser');
const users = require('./controls/users');
const sources = require('./controls/sources')
const connection = require('./database/connect');

const port = 8080;
const host = 'localhost';
const app = express();
connection.connect();


app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/db', users, sources);

app.listen(8080, () => {
    console.log(`Service starts on http://${host}:${port}`);
});