const express = require('express');
const route = require('./routes');
const port = 1245;

const app = express();

app.use('/', route);

app.listen(port);

module.exports = app;
