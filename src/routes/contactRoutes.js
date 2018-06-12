const contact = require('../controllers/contactController.js')

module.exports = (app) => {
  app.route('/contact')
    .get(contact.listAllContacts)
    .post(contact.createContact)

  app.route('/contact/:contactId')
    .get(contact.readContact)
    .put(contact.updateContact)
    .delete(contact.deleteContact)

  app.use((req, res) => {
    res.status(404).send({ data: `${req.method}:${req.originalUrl} not found` })
  })

}
