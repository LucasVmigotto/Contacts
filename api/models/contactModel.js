var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ContactSchema = new Schema({
  name:{
    type: String,
    required: 'Please, inform the contact name'
  },
  lastName: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  updateDate: { type: Date },
  email: { type: String }
})
module.exports=mongoose.model('Contacts', ContactSchema)
