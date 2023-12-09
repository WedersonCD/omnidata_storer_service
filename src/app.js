const express = require('express');
const helmet = require('helmet')
const port = process.env.SERVICE_PORT || 9952
const app = express();

//helmet set
app.use(helmet)

app.use(express.json());

app.get('/', (req, res) => res.send('Storer Service is running'));

app.listen(port, () => console.log(`Storer Service listening on port ${port}`));