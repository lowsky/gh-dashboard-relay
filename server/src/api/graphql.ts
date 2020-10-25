import { ApolloServer } from 'apollo-server-micro';

import { typeDefs } from '../localSchema';
import { resolvers } from '../lambda/apis/resolvers';

const server = new ApolloServer({
    typeDefs,
    resolvers,

    introspection: true,
    playground: true,
});

const handler = server.createHandler({
    path: '/api/graphql',
});

// @ts-ignore
export default async (req: NowRequest, res: NowResponse) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    if (req.method === 'OPTIONS') {
        return res.send(200);
    }

    return handler(req, res);
};
