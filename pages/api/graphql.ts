/* eslint-disable react-hooks/rules-of-hooks */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

import {
    getGraphQLParameters,
    processRequest,
    renderGraphiQL,
    RenderGraphiQLOptions,
    Request,
    sendResult,
    shouldRenderGraphiQL,
} from 'graphql-helix';
import { envelop, useSchema } from '@envelop/core';
import { makeExecutableSchema } from '@graphql-tools/schema';

import { typeDefs } from '../../lib/localSchema';
import { resolvers } from '../../lib/resolvers';

const isLocalDev = process.env.NODE_ENV === 'development';

function getEnveloped(req) {
    const schema = makeExecutableSchema({ typeDefs, resolvers });
    const getEnveloped = envelop({
        plugins: [useSchema(schema)],
    });

    return getEnveloped({ req });
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { parse, validate, contextFactory, execute, schema } = getEnveloped(req);

    const request: Request = {
        body: req.body,
        headers: req.headers,
        // @ts-expect-error: TS2322: Type 'string | undefined' is not assignable to type 'string'.
        method: req.method,
        query: req.query,
    };

    await handleRequest(request, res, parse, validate, execute, contextFactory, schema);
};

async function handleRequest(request: Request, res: NextApiResponse, parse, validate, execute, contextFactory, schema) {
    if (shouldRenderGraphiQL(request)) {
        const options: RenderGraphiQLOptions = { endpoint: '/api/graphql' };
        res.send(renderGraphiQL(options));
        return;
    }

    const graphQLParameters = getGraphQLParameters(request);
    const { operationName, query, variables } = graphQLParameters;

    const result = await processRequest({
        parse,
        validate,
        execute,
        contextFactory,
        operationName,
        query,
        variables,
        request,
        schema,
    });
    isLocalDev && console.log({ result });

    await sendResult(result, res);
}

export default handler;
