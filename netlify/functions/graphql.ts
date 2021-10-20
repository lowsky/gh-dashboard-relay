import { ApolloServer } from 'apollo-server-lambda';

import { typeDefs } from '../../lib/localSchema';
import { resolvers } from '../../lib/resolvers';

const isLocalDev =  process.env.NODE_ENV === 'development';

// will be stored here for re-use
// let server: ApolloServer | null = null;
// const instana = require('@instana/aws-lambda');

const lambda = new ApolloServer({
    typeDefs,
    resolvers,

    debug: isLocalDev,
    introspection: isLocalDev,
});


//exports.handler = instana.wrap((event, context, callback) => {
const handler = (event, context, callback) => {

    console.info('    - ----- - -- - tracccce.')

    // @ts-expect-error not used yet...
    const callbackFilter = function (error, output) {
        if (error) {
            console.error(error);
        } else {
            isLocalDev &&
            console.info('no error. -----------------------------------------------------------------------');
        }

        console.log('Environment: ', process && process.env && process.env.NODE_ENV);

        isLocalDev && console.log('result', output);
        callback(error, output);
        isLocalDev && console.info('done');
    };

    const handler = lambda.createHandler();


    isLocalDev && console.info('handler created');

    try {
        // @ts-expect-error not used yet...: Type mismatch
        // return handler(event, context, callbackFilter);
        return handler(event, context);
    }
    catch(e) {
        console.error(e);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Hello Graphql World, sorry an error: " + e }),
        };
    }

};
//)

export { handler };
