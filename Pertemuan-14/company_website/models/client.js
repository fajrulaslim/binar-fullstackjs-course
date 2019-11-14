//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var ClientSchema = new Schema({
  name: {type: String},
  address: {type: String},
  total_project: {type: Number},
  status: {type: String, require: true, enum: ['done', 'progress'], default: 'done'}
});

module.export = mongoose.model('client', ClientSchema)