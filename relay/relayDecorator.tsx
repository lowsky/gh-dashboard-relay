import { GraphQLTaggedNode, OperationDescriptor, RelayEnvironmentProvider, useLazyLoadQuery } from 'react-relay';
import { GraphQLSingularResponse, OperationType } from 'relay-runtime';
import { createMockEnvironment, MockPayloadGenerator, MockResolvers } from 'relay-test-utils';
import { DecoratorFunction } from 'storybook/internal/types';
import { InferMockResolvers } from './relayStorybookTypes';

export const relayDecorator: DecoratorFunction = (Story, context) => {
    const {
        generateFunction,
        getReferenceEntries,
        getReferenceEntry,
        mockResolvers = {},
        query,
        variables = {},
    } = context.parameters;

    const environment = createMockEnvironment();

    if (mockResolvers)
        environment.mock.queueOperationResolver((operation) => {
            if (generateFunction) {
                return generateFunction(operation, mockResolvers);
            }
            return MockPayloadGenerator.generate(operation, mockResolvers);
        });

    if (query) {
        environment.mock.queuePendingOperation(query, variables);

        const Renderer = function RenderWithQuery() {
            // eslint-disable-next-line relay/generated-typescript-types
            const queryResult = useLazyLoadQuery(query, variables);

            const entries = getReferenceEntries ? getReferenceEntries(queryResult) : [getReferenceEntry(queryResult)];
            Object.assign(context.args, Object.fromEntries(entries));

            return <Story {...context.args} />;
        };
        return (
            <RelayEnvironmentProvider environment={environment}>
                <Renderer />
            </RelayEnvironmentProvider>
        );
    }

    return (
        <RelayEnvironmentProvider environment={environment}>
            <Story {...context.args} />
        </RelayEnvironmentProvider>
    );
};

export type WithRelayParameters<TQuery extends OperationType, TResolvers = object> = {
    /**
     * A GraphQLTaggedNode returned by the relay's graphql`...` template literal.
     */
    query: GraphQLTaggedNode;

    /**
     * Optional. Variables to pass to the query.
     */
    variables?: TQuery['variables'];

    /**
     * Optional. Mock resolver object pass to the relay-test-utils MockPayloadGenerator.generate function.
     * If you use TResolver type argument, you can get type safety <3
     */
    mockResolvers?: InferMockResolvers<TResolvers>;

    /**
     * Optional. A function to execute instead of the default MockPayloadGenerator.generate function.
     */
    generateFunction?: (
        operation: OperationDescriptor,
        mockResolvers?: MockResolvers | null
    ) => GraphQLSingularResponse;

    /**
     * A function that returns an entry to be added to the story's args.
     *
     * @param queryResult Result of the useLazyLoadQuery hook with the query passed as parameter.
     * @returns An entry to be added to the story's args.
     */
} & (
    | {
          getReferenceEntry: (queryResult: TQuery['response']) => [string, unknown];
          getReferenceEntries?: never;
      }
    | {
          getReferenceEntries: (queryResult: TQuery['response']) => Array<[string, unknown]>;
          getReferenceEntry?: never;
      }
);
