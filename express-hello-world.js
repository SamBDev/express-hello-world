"use strict";

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/time', (req, res) => {
    res.send(new Date().toISOString());
});

app.listen(process.env.PORT || 8080);