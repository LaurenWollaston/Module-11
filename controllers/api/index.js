const express = require('express');
const app = express();
const notes = require('./notes');

app.use('/', notes);

module.exports = app;