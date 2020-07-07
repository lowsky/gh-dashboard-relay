import { ApolloServer } from 'apollo-server-lambda';

import { typeDefs } from '../localSchema';
import { resolvers } from './apis/resolvers';

const server = new ApolloServer({
    typeDefs,
    resolvers,

    introspection: true,
    playground: true,
});

exports.handler = server.createHandler({});
