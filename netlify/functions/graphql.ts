// import { Handler } from "@netlify/functions";
import { ApolloServer } from 'apollo-server-lambda';
//const  formatError =require('apollo-errors')

import { typeDefs } from '../../lib/localSchema';
import { resolvers } from '../../lib/resolvers';
// const xxx = require('apollo-server-core')
//import { ApolloServerPluginLandingPageDisabled, ApolloServerPluginLandingPageGraphQLPlayground,
//} from 'apollo-server-core';
import {
    // ApolloServerPluginLandingPageDisabled,
    ApolloServerPluginLandingPageGraphQLPlayground,
} from 'apollo-server-core';

const isLocalDev = true;


// will be stored here for re-use
// let server: ApolloServer | null = null;

// const instana = require('@instana/aws-lambda');

const lambda = new ApolloServer({
    typeDefs,
    resolvers,
    // formatError,

    debug: isLocalDev,
    introspection: isLocalDev,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground(),
    ]
});


//exports.handler = instana.wrap((event, context, callback) => {
const handler = (event, context, callback) => {

    console.error('    - ----- - -- - tracccce.')

    // @ts-ignore
    const callbackFilter = function (error, output) {
        if (error) {
            console.error(error);
        } else {
            isLocalDev &&
            console.info('no error. -----------------------------------------------------------------------');
        }

        console.log('Environment: ', process && process.env && process.env.NODE_ENV);
        isLocalDev && console.log('Environment: LOCAL? ', isLocalDev);

        isLocalDev && console.log('result', output);
        callback(error, output);
        isLocalDev && console.info('done');
    };

    const handler = lambda.createHandler();

    isLocalDev && console.info('handler created');
/*
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello Graphql World" }),
    };

 */
    isLocalDev && console.info('handler created');

    try {
        // @ts-ignore
        // return handler(event, context, callbackFilter);
        return handler(event, context);
    }
    catch(e) {
        console.error(e);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Hello Graphql World" + e }),
        };
    }

};
//)

export { handler };
