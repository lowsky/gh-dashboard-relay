/* eslint-disable no-console */

// loads github access token:
require('dotenv/config');

const express = require('express');
const helmet = require('helmet');

const { GraphQLServer } = require('graphql-yoga');

let schema = require('./localSchema');

const server = new GraphQLServer({
    schema: schema.default,
});
const options = {
    endpoint: '/graphql',
    subscriptions: false,
    playground: '/playground',
    debug: true,
};

server.start(options, ({ port }) => {
    console.log(`Server is running on http://localhost:${port}`);

    const app = server.express;

    app.use(helmet.hidePoweredBy());
    // disable IEx to open other files with same rights
    app.use(helmet.ieNoOpen());
    // Sets "X-Content-Type-Options: nosniff".
    app.use(helmet.noSniff());

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static('../build'));
        console.log('Running in production mode, serving web client from ../build.');
    } else {
        app.use(express.static('../public'));
        console.log('Running in dev mode, serving only ../public folder');
    }

    const path = require('path');
    app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, '../build', 'index.html'));
    });
});
