const { Router } = require('express')
const routes = Router()
const DevController = require('./controllers/devController')
const searchController = require('./controllers/searchController')

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.get('/search', searchController.index)

module.exports = routes