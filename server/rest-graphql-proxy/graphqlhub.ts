import { GraphQLObjectType } from 'graphql';

import { QueryObjectType as githubQueryType } from './github';

let FIELDS = {
    github: {
        type: githubQueryType,
        resolve() {
            return {};
        },
    },
};

export const QueryObjectType = new GraphQLObjectType({
    name: 'GraphQL_github_API',
    description: 'APIs exposed as GraphQL',
    fields: () => FIELDS,
});
