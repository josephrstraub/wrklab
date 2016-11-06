const mongoLocal = 'mongodb://localhost:27017/wrklab'

import express from 'express'
import fs from 'fs'
import mongoose from 'mongoose'

const app = express()

app.set('port', (process.env.PORT || 3001))

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

mongoose.connect(process.env.MONGOLAB_URI || mongoLocal)
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
const featuredProjectsModel = mongoose.model('featuredProjects', featuredProjectsSchema)

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

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
