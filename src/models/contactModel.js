var mongoose = require('mongoose')

var ContactSchema = new mongoose.Schema({
  name:{
    type: String,
    required: 'Name field can\'t be empty'
  },
  lastName: { type: String },
  email: {
    type: String,
    required: 'E-Mail field can\'t be empty'
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  updateDate: { type: Date }
})

module.exports = mongoose.model('Contact', ContactSchema)
