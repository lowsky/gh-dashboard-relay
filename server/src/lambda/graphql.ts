import { ApolloServer } from 'apollo-server-lambda';

import { resolvers, typeDefs } from '../../localSchema';

const server = new ApolloServer({
    typeDefs,
    resolvers,

    introspection: true,
    playground: true,
});

exports.handler = server.createHandler({});
