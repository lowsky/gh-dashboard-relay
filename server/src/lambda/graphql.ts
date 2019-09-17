import { ApolloServer } from 'apollo-server-lambda';

import { schema } from '../../localSchema';

const server = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
});

exports.handler = server.createHandler({});
