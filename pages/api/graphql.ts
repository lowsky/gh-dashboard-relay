import { NextApiRequest, NextApiResponse } from 'next';
import { createYoga } from 'graphql-yoga';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { Octokit } from '@octokit/rest';

import { typeDefs } from 'lib/localSchema';
import { resolvers } from 'lib/resolvers';
import { getAccessToken } from 'lib/session';
import { AuthorizedGitHub, getAuthorizedGitHub } from 'restinpeace/github';

export const schema = makeExecutableSchema({ typeDefs, resolvers });

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
        const auth = getAccessToken(initialContext.req);
        return {
            getAuthorizedGitHub: () => {
                const octo = new Octokit({ auth });
                return getAuthorizedGitHub(octo);
            },
        };
    },
});
