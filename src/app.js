require('../db/sequelize')
const express = require('express');

const app = express();

require('./routes/v1/index')(app);

module.exports = app;