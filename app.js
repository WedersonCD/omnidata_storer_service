const express = require('express');
const app = express();
const port = 9952;

app.use(express.json());

app.get('/', (req, res) => res.send('Storer Service is running'));

app.listen(port, () => console.log(`Storer Service listening on port ${port}`));