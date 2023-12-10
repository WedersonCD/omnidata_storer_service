const express = require('express');
const helmet = require('helmet')
const mongoService  = require('./services/mongoService')
const apiDocsRoutes = require('./api/api_docs_routes')

const API_VERSION_LTS = process.env.API_VERSION_LTS || '0'

//routes
const userRoutes = require('./api/v'+API_VERSION_LTS+'/routes/UserRouter')
const dataProductRoutes = require('./api/v'+API_VERSION_LTS+'/routes/DataProductRouter')

const app = express();

app.use(express.json());
app.use(helmet())

//connecto to mongodb
mongoService();

app.use('/',apiDocsRoutes)
app.use('/storer/api-docs',apiDocsRoutes)
app.use('/storer/users',userRoutes)
app.use('/storer/data-products',dataProductRoutes)

const port = process.env.SERVICE_PORT || 9952
app.listen(port, () => console.log(`Storer Service listening on port ${port}`));