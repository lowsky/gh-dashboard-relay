/* eslint-disable no-console */
require('dotenv/config');
const express = require('express');
const helmet = require('helmet');

var cors = require('cors');
var corsOptions = {
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

app.use(cors(corsOptions));

/* eslint-disable no-unused-vars,prettier/prettier */
app.use('/graphql', expressGraphQL(req => ({
    schema: schema.default,
    graphiql: true,
    pretty: true
})));

app.listen(app.get('port'), function() {
    console.log(`Express app started on http://localhost:${app.get('port')} press Ctrl-C to terminate.`);
});
