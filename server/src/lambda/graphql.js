const { GraphQLServerLambda } = require('graphql-yoga');
const schema = require('../../localSchema');

const lambda = new GraphQLServerLambda({
    schema: schema.default,
    options: {
        debug: false,
    }
});

const handler = (event, lambdaContext, callback) => {
    console.error('.....handling handle get', event);
    lambda.handler(event, lambdaContext, callback);
};

exports.handler = handler;
