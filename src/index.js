const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes')

mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true})

app.use(express.json())
app.use(routes)

app.listen(3001)