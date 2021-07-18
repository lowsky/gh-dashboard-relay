import { IncomingMessage, ServerResponse } from 'http'
import { ApolloServer } from 'apollo-server-micro';

import { typeDefs } from "../../lib/localSchema";
import { resolvers } from '../../lib/resolvers';

const server = new ApolloServer({
    typeDefs,
    resolvers,

    debug: true,
    introspection: true,
});

const handler = server.createHandler({

    path: '/api/graphql',
});


export const config = {
    api: {
        bodyParser: false,
    },
}

export default handler;
