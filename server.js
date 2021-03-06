import { sendEmail } from './mail'

const mongoLocal = 'mongodb://localhost:27017/wrklab'
const app = express()

var path = require('path')

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

import express from 'express'
import nodemailer from 'nodemailer'
import fs from 'fs'
import mongoose from 'mongoose'

app.set('port', (process.env.PORT || 3001))

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('/featured', (req, res) => res.sendFile(path.resolve('client/build', 'index.html')));
  app.get('/process', (req, res) => res.sendFile(path.resolve('client/build', 'index.html')));
  app.get('/vision', (req, res) => res.sendFile(path.resolve('client/build', 'index.html')));
  app.get('/products', (req, res) => res.sendFile(path.resolve('client/build', 'index.html')));
  app.get('/products/*', (req, res) => res.sendFile(path.resolve('client/build', 'index.html')));
  app.get('/api/:dataType', (req, res) => {
    const filter = {}
    let dataType = req.params.dataType
    modelToUse[dataType].find(filter, (err, data) => {
      if (err) {
        return console.error(err)
      }
      return res.json(data)
    })
  })
  app.post('/send', (req, res) => {
    sendEmail(req.body).then((data) => res.send(data))
  })
  app.use(function(req, res) {
    res.status(404).send('Sorry cant find that!');
  });
}

mongoose.connect(process.env.MONGODB_URI || mongoLocal)
const db = mongoose.connection
db.on('error', (err) => {
  console.error.bind(console, `Connection error: ${err}`)
  process.exit(1)
})
db.once('open', () => {
  console.log('Connected to MongoDB server.')
})

const processesSchema = new mongoose.Schema({
  name: String,
  description: String
})
const processesModel = mongoose.model('processes', processesSchema)

const featuredProjectsSchema = new mongoose.Schema({
  name: String,
  description: String,
  images: Array
})
const featuredProjectsModel = mongoose.model('featuredProjects', featuredProjectsSchema, 'featuredProjects')

const productsSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
  availableColors: Array,
  availableSizes: Array,
  price: Number,
  images: Array
})
const productsModel = mongoose.model('products', productsSchema)

const visionsSchema = new mongoose.Schema({
  name: String,
  description: String
})
const visionsModel = mongoose.model('visions', visionsSchema)

const modelToUse = {
  'processes': processesModel,
  'featured-projects': featuredProjectsModel,
  'products': productsModel,
  'visions': visionsModel
}

app.get('/api/:dataType', (req, res) => {
  const filter = {}
  let dataType = req.params.dataType
  modelToUse[dataType].find(filter, (err, data) => {
    if (err) {
      return console.error(err)
    }
    return res.json(data)
  })
})

app.post('/send', (req, res) => {
  sendEmail(req.body).then((data) => res.send(data))
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
