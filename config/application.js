const { graphqlHTTP } = require('express-graphql')
const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const schema = require('../app/graphql/schema')
// const database = require('./database')
const { routes } = require('./routes')
const app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))
// app.use(helmet())
app.use(routes())
module.exports = app
