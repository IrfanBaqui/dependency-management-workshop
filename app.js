var app = require('express')();
var bodyparser = require('body-parser');
var apiV1 = require('./apiV1');
var loggerMiddleware = require('./middleware/logger_middleware');

app.use(bodyparser());
app.use(loggerMiddleware);

app.use('/v1', apiV1);

module.exports = app;

