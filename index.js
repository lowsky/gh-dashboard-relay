/* eslint-disable no-console */
const express = require('express');
const helmet = require('helmet');

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

app.listen(app.get('port'), function() {
    console.log(`Express app started on http://localhost:${app.get('port')} press Ctrl-C to terminate.`);
});
