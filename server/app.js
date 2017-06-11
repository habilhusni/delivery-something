const express     = require('express');
const cors        = require('cors');
const bodyParser  = require('body-parser');
const logger      = require('morgan');
const mongoose    = require('mongoose');
mongoose.connect('mongodb://localhost/deliverysomething');

const app         = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const index       = require('./routes/index');
app.use('/', index);


app.listen(3000);
console.log('Connected to server!');

module.exports    = app;
