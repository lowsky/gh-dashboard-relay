/* eslint-disable no-console */
'use strict';

let express = require('express');
let app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static('dist'));
app.use('/assets', express().use(express.static('assets')));


// const graphql = _graphql.graphql;

    // mutation : GraphQLHub.MutationsType,

    // rootValue: req.rootValue,
    // formatError: formatError,
    // pretty: req.query.pretty,

app.listen(app.get('port'), function () {
    console.log(`Express app started on http://localhost:${app.get('port')} press Ctrl-C to terminate.`);
});
