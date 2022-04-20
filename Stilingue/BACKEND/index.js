const cors = require('cors')
const express = require ('express');
const server = express ();
const status = require('./src/data/status.json')

server.use(cors())

server.get('/status', (req, res) => {
 return res.json (status)
});

server.listen (3000, () => {
 console.log('Servidor ok')
});