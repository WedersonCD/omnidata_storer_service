const express = require('express');
const helmet = require('helmet')
const api_docs_routes = require('./api/api_docs_routes')

const app = express();
const port = process.env.SERVICE_PORT || 9952

app.use(express.json());
app.use(helmet())

app.use('/api-docs',api_docs_routes)

app.listen(port, () => console.log(`Storer Service listening on port ${port}`));