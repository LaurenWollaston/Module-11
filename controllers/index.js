const express = require('express');
const app = express();
const homeRoutes = require('./homeRoutes');

app.use('/', homeRoutes);

module.exports = app;