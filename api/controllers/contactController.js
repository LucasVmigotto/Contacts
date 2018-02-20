var mongoose = require('mongoose'),
  Contact = mongoose.model('Contacts')
var error = 'A unespected error occurred!'

exports.listAllContacts=function(req, res){
  Contact.find(function(err, contact){
    if (err) {
      console.log(error  + ' ' + err.message)
      res.send(err)
    }
    res.json(contact)
  })
}

exports.createContact=function(req, res){
  var newContact = new Contact(res.body)
  newContact.save(function(err, contact){
    if (err) {
      console.log(error + ' ' + err.message)
      res.send(err);
    }
    res.json(contact)
  })
}

exports.readContact=function(res, req){
  Contact.findById({_id: req.params.contactId}, function(err, contact){
    if (err) {
      console.log(error + ' ' + err.message)
      res.send(err)
    }
    res.json(contact)
  })
}

exports.updateContact=function(req, res){
  Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, {new: true}, function(err, contact){
    if (err) {
      console.log(error + ' ' + err.message)
      res.send(err)
    }
    res.json(contact)
  })
}

exports.deleteContact=function(req, res){
  Contact.remove({_id: req.params.contactId}, function(err){
    if (err) {
      console.log(error + ' ' + err.menssage)
      res.send(err)
    }
    res.json({message: 'Contact successfully deleted!'})
  })
}
