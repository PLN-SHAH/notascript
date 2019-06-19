require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, 'build')))

const Document = require('./models/Document')
const Dictionary = require('./models/Dictionary')

app.get('/documents', (req, res) => {
  Document.find()
    .then(document => res.json(document))
    .catch(err => res.json(err))
})

app.get('/dictionaries', (req, res) => {
  Dictionary.find()
    .then(dictionary => res.json(dictionary))
    .catch(err => res.json(err))
})

app.post('/documents', (req, res) => {
  Document.create(req.body)
    .then(document => res.status(201).json(document))
    .catch(err => console.error(err))
  console.log('Successful Document Update')
})

app.post('/dictionaries', (req, res) => {
  Dictionary.create(req.body)
    .then(dictionary => res.status(201).json(dictionary))
    .catch(err => console.error(err))
  console.log('Successful Document Update')
})

app.delete('/documents/:id', (req, res) => {
  const { id } = req.params
  Document.findByIdAndDelete(id)
    .then(document => res.status(200).json(document))
    .catch(err => res.status(500).json(err))
})

app.delete('/dictionaries/:id', (req, res) => {
  const { id } = req.params
  Dictionary.findByIdAndDelete(id)
    .then(dictionary => res.status(200).json(dictionary))
    .catch(err => res.status(500).json(err))
})

app.patch('/documents/:id', (req, res) => {
  const { id } = req.params
  const { title, description, symbols } = req.body

  Document.findByIdAndUpdate(id, { title, description, symbols }, { new: true })
    .then(document => res.json(document))
    .catch(err => err.json({ errors: [err] }))
})

app.patch('/dictionaries', (req, res) => {
  const { title, entries, _id } = req.body
  Dictionary.findByIdAndUpdate(_id, { title, entries }, { new: true })
    .then(dictionary => console.log(dictionary))
    .catch(err => err.json({ errors: [err] }))
})

//CONFIGURATION
const db = process.env.DB_URL || 'mongodb://localhost:27017/notascript'
const port = process.env.PORT || 4000

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err))

app.listen(port, err => {
  err ? console.log(err) : console.log(`Server ready on port ${port}`)
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'))

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })
}
