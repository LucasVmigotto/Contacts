module.exports=function(app){
  var contact = require('../controllers/contactController.js')
  app.route('/contact')
    .get(contact.listAllContacts)
    .post(contact.createContact)
  app.route('/contact/:contactId')
    .get(contact.readContact)
    .put(contact.updateContact)
    .delete(contact.deleteContact)
}
