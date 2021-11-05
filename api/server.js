const express = require('express');
const router = require('./router');

const server = express();
server.use(express.json());

server.use('/api', router);


server.get('*', (req, res) => {
    res.send(`
    <h1>Welcome, Chef!</h1>
    `)
})

module.exports = server;