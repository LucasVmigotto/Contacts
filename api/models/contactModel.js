var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ContactSchema = new Schema({
  name:{
    type: String,
    required: 'This field cant be leave empty'
  },
  lastName: {
    type: String,
    required: 'This fild cant be empty either'
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  updateDate: { type: Date },
  email: { type: String }
})
module.exports=mongoose.model('Contacts', ContactSchema)
