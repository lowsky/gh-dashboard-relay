const Graphql = require('graphql');

const graphqlhubSchemas = require('../graphqlhub-schemas/graphqlhub');

const schema = new Graphql.GraphQLSchema({
    query: graphqlhubSchemas.QueryObjectType,
});

export default schema;
