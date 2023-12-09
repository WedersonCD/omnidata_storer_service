const express = require('express');
const helmet = require('helmet')
const port = process.env.SERVICE_PORT || 9952
const app = express();

//set json
app.use(express.json());

//helmet set
app.use(helmet)



app.get('/', (req, res) => res.send('Storer Service is running'));

app.listen(port, () => console.log(`Storer Service listening on port ${port}`));