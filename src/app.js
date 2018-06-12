require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routes = require('./routes/contactRoutes')
const host = process.env.HOSTNAME || 'localhost'
const port = process.env.PORT || 3000
const app = express()

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
routes(app)

app.set('host', host)
app.set('port', port)

module.exports = app
