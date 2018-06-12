const mongoose = require('mongoose')
const app = require('./app')
const { db } = require('./configs/configs.json')
let server = null

mongoose.connect(db.url).then(() => {
  console.log('Connected with the database')
  server = app.listen(app.get('port'), (err) => {
    if (err) console.log(`Error ${err.name} occurred`)
    console.log(`Application running at ` +
      `http://${app.get('host')}:${app.get('port')}/contacts`)
  })
}).catch((err) => {
  if (err) console.log(`Error ${err.name} occurred`)
})

module.exports = app
