var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Contact = require('./api/models/contactModel'),
  bodyParser = require('body-parser')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ContactDb')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

var routes = require('./api/routes/contactRoutes')
routes(app)

app.use(function(req, res){
  res.status(404).send({url: req.originalUrl + 'extension not found!'})
})
app.listen(port)
console.log('Contacts started on port number: ' + port)
