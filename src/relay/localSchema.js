const Graphql = require('graphql');

const graphqlhubSchemas = require('../rest-graphql-proxy/graphqlhub');

const schema = new Graphql.GraphQLSchema({
    query: graphqlhubSchemas.QueryObjectType,
});

export default schema;
