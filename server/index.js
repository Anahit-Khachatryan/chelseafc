const express = require("express");
const { data1 , data2, data3 } = require("./data");

const app = express();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/getData1', (req, res) => {
    res.send(data1)
});
app.get('/getData2', (req, res) => {
    res.send(data2)
});
app.get('/getData3', (req, res) => {
    res.send(data3)
});

app.listen(8010);