/* eslint-disable no-console */
require('dotenv/config');
const express = require('express');
const helmet = require('helmet');

// allow requests in webpack-dev-server mode (on :8080)
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();

app.use(helmet.hidePoweredBy());
// disable IEx to open other files with same rights
app.use(helmet.ieNoOpen());
// Sets "X-Content-Type-Options: nosniff".
app.use(helmet.noSniff());

app.set('port', process.env.PORT || 3000);

app.use(express.static('dist'));
app.use('/assets', express().use(express.static('assets')));

// const graphql = _graphql.graphql;

// mutation : GraphQLHub.MutationsType,

// rootValue: req.rootValue,
// formatError: formatError,
// pretty: req.query.pretty,

var expressGraphQL = require('express-graphql');
var schema = require('./src/relay/localSchema');
const path = require('path');

app.use(cors(corsOptions));

/* eslint-disable no-unused-vars,prettier/prettier */
app.use('/graphql', expressGraphQL(req => ({
    schema: schema.default,
    graphiql: true,
    pretty: true
})));

app.use(express.static('dist'));

// doesn't work with webpack-dev-server :(
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(app.get('port'), function() {
    console.log(`Express app started on http://localhost:${app.get('port')} press Ctrl-C to terminate.`);
});
