const express = require('express');
const server = express();
server.use(express.json());

const cors = require('cors');
server.use(cors({
    origin: '*'
}))

const UsersRouter = require('./routes/users.router');
server.use('/api/users', UsersRouter);

const AuthRouter = require('./routes/auth.router');
server.use('/api/auth', AuthRouter);

const DonationsRouter = require('./routes/bikes.router');
server.use('/api/bikes', DonationsRouter);

server.get('/', (req, res) => {
    res.send(`<h1>Server is up and going</h1>`);
});

server.use('*', (err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    });
});

module.exports = server;