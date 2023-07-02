import { NextApiRequest, NextApiResponse } from 'next';
import { createYoga } from 'graphql-yoga';
import { makeExecutableSchema } from '@graphql-tools/schema';

import { typeDefs } from 'lib/localSchema';
import { resolvers } from 'lib/resolvers';

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default createYoga<{
    req: NextApiRequest;
    res: NextApiResponse;
}>({
    schema,
    logging: true,
    graphqlEndpoint: '/api/graphql',
    context: (_ctx) => ({}),
});
