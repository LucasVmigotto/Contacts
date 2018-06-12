const Contact = require('../models/contactModel')
const error = 'A unespected error occurred!'

exports.listAllContacts = (req, res) => {
  Contact.find((err, contact) => {
    if (err) {
      console.log(`${err.name}: ${err.message}`)
      res.send(err)
    }
    res.json({ data: contact })
  })
}

exports.createContact = (req, res) => {
  new Contact(req.body).save((err, contact) => {
    if (err) {
      console.log(`${err.name}: ${err.message}`)
      res.send(err)
    }
    res.json({ data: contact })
  })
}

exports.readContact = (req, res) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if (err) {
      console.log(`${err.name}: ${err.message}`)
      res.send(err)
    }
    res.json({ data: contact })
  })
}

exports.updateContact = (req, res) => {
  Contact.findOneAndUpdate({_id: req.params.contactId},
      req.body, { new: true }, (err, contact) => {
        if (err) {
          console.log(`${err.name}: ${err.message}`)
          res.send(err)
        }
        res.json({ data: contact})
      }
  )
}

exports.deleteContact = (req, res) => {
  Contact.remove({_id: req.params.contactId}, (err) =>{
    if (err) {
      console.log(`${err.name}: ${err.message}`)
      res.send(err)
    }
    res.json({ data: 'Contact successfully deleted!' })
  })
}
