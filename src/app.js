// @ts-check

const express = require('express')
const cors = require("cors");

const app = express()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const mainRouter = require('./routes/index')

app.use('/public', express.static('src/public'))
app.use('/', mainRouter)

app.get('/', (req, res)=>{
  console.log('Hello World')
  res.json('Hello World')
})
// @ts-ignore
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.statusCode = err.statusCode || 500
  res.send(err.message)
})

module.exports = app
