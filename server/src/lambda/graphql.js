const { GraphQLServerLambda } = require('graphql-yoga');
let schema = require('../../localSchema');
/*


const lambda = new GraphQLServerLambda({
    schema: schema.default,
});
*/

import { execute } from 'graphql';

const typeDefs = `
  type Query {
    hello(name: String): String
  }
`
const resolvers = {
    Query: {
        //hello: (_, { name }) => `Hello ${name || 'world'}`,
        hello: (_, { name }) => {

            let x = execute(
    schema.default,
    'hello',
    /*
    rootValue,
    contextValue,
    variableValues,
    operationName,
    fieldResolver
    */
            );


            return `Hello ${name || 'world'}`;
        },
    },
}

const lambda = new GraphQLServerLambda({
    typeDefs,
    schema: schema.default
    //resolvers,
});

const handler = (event, lambdaContext, callback) => {
    console.error('.....handling handle get', event);
    lambda.handler(event, lambdaContext, callback);
};

exports.handler = handler;
