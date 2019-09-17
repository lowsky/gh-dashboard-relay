import { GraphQLSchema } from 'graphql';

import { QueryObjectType } from './rest-graphql-proxy/graphqlhub';

export const schema = new GraphQLSchema({
    query: QueryObjectType,
});
