import { ApolloServer } from 'apollo-server-lambda';

const schema = require('../../localSchema');

const server = new ApolloServer({
    schema: schema.default,
    introspection: true,
    playground: true,
});

exports.handler = server.createHandler({});
