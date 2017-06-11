'use strict'
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var dataSchema  = new Schema({
  place     : String,
  longitude : String,
  latitude  : String,
});

const Data      = mongoose.model('Data', dataSchema);

module.exports  = Data;
