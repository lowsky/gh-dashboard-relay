import { IncomingMessage, ServerResponse } from 'http'
import { ApolloServer } from 'apollo-server-micro';

import { typeDefs } from "../../lib/localSchema";
import { resolvers } from '../../lib/resolvers';
import {
    ApolloServerPluginLandingPageDisabled,
    ApolloServerPluginLandingPageGraphQLPlayground,
} from 'apollo-server-core';

// will be stored here for re-use
let server: ApolloServer | null = null;

async function getGraphqlServer() {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        debug: process.env.NODE_ENV !== 'production',
        introspection: true,
        plugins: [
            process.env.NODE_ENV === 'production'
                ? ApolloServerPluginLandingPageDisabled()
                : ApolloServerPluginLandingPageGraphQLPlayground(),
        ],
    });

    await apolloServer.start();
    return apolloServer;
}

const handler = async (req: IncomingMessage, res: ServerResponse) => {
    const apolloServer: ApolloServer = server || (await getGraphqlServer());
    server = apolloServer;
    return apolloServer.createHandler({
        path: '/api/graphql',
    })(req, res);
};

export const config = {
    api: {
        bodyParser: false,
    },
}

export default handler;
