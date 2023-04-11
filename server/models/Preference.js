const mongoose = require('mongoose')

const preferenceSchema = new mongoose.Schema({
    name: String,
    phone:  String,
    tips:  [String],
  });
  
  

// NOTE! use a singular model name, mongoose automatically creates a collection like so:
// model: 'Account' === collection: 'accounts'
const modelName = 'Preference'

module.exports = mongoose.model(modelName, preferenceSchema)


