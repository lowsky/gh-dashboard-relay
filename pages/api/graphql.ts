import { NextApiRequest, NextApiResponse } from 'next';
import { createYoga } from 'graphql-yoga';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { Octokit } from '@octokit/rest';

import { typeDefs } from 'lib/localSchema';
import { resolvers } from 'lib/resolvers';
import { getAccessToken } from 'lib/session';
import { AuthorizedGitHub, getAuthorizedGitHub } from 'restinpeace/github';

const schema = makeExecutableSchema({ typeDefs, resolvers });

type SystemContext = {
    req: NextApiRequest;
    res: NextApiResponse;
};

export interface UserContext {
    getAuthorizedGitHub: () => AuthorizedGitHub;
}

export default createYoga<SystemContext, UserContext>({
    schema,
    logging: true,
    graphqlEndpoint: '/api/graphql',
    context: (initialContext): UserContext => {
        const accessToken = getAccessToken(initialContext.req);
        const octo = new Octokit({
            auth: accessToken,
        });

        return {
            getAuthorizedGitHub: () => getAuthorizedGitHub(octo),
        };
    },
});
