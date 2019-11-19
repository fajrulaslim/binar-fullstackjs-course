//Require Mongoose
var mongoose = require('mongoose');

// schema
var kittySchema = new mongoose.Schema({
    name: String,
    age: {
      type: Number,
      min: [2, 'Kucingnya terlalu muda!'],
      max: [5, 'Melebihi batas maksimum umur !']
    }
  })

// method
kittySchema.methods.hello = function(){
    let teks = `Hello my name ${this.name}, and 1'am ${this.age} years old, miaw!`
    console.log(teks);
  }


// exports module
module.exports = mongoose.model('Cat', kittySchema)