/* eslint-disable no-console */
'use strict';


var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname));




// const graphql = _graphql.graphql;

    // mutation : GraphQLHub.MutationsType,

    // rootValue: req.rootValue,
    // formatError: formatError,
    // pretty: req.query.pretty,

app.listen(app.get('port'), function () {
    console.log(`Express app started on http://localhost:${app.get('port')} press Ctrl-C to terminate.`);
});
