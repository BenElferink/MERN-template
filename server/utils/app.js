const express = require('express') // Backend App (server)
const cors = require('cors') // HTTP headers (enable requests)
const {ORIGIN} = require('../constants')

// initialize app
const app = express()

// middlewares
app.use(cors({origin: ORIGIN}))
app.use(express.json({extended: true})) // body parser
app.use(express.urlencoded({extended: false})) // url parser
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
// error handling
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send()
  next()
})

module.exports = app
