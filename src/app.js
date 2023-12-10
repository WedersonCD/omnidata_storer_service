const express = require('express');
const helmet = require('helmet')
const mongoService  = require('./services/mongoService')
const api_docs_routes = require('./api/api_docs_routes')

const API_VERSION_LTS = process.env.API_VERSION_LTS || '0'

const userRoutes = require('./api/v'+API_VERSION_LTS+'/routes/UserRouter')


const app = express();
const port = process.env.SERVICE_PORT || 9952

app.use(express.json());
app.use(helmet())

mongoService();

app.use('/storer/api-docs',api_docs_routes)
app.use('/storer/users',userRoutes)

app.listen(port, () => console.log(`Storer Service listening on port ${port}`));