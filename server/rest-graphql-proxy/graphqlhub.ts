import { GraphQLObjectType } from 'graphql';

import * as GITHUB from './github';

let FIELDS = {
    github: {
        type: GITHUB.QueryObjectType,
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
