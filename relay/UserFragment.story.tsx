import { graphql } from 'react-relay';

import type { WithRelayParameters } from './storybook/relayDecorator';
import preview from '../.storybook/preview';

import UserFragment from '../relay/UserFragment';
import type { UserFragment_user$data } from './__generated__/UserFragment_user.graphql';
import type { UserFragmentStoryQuery } from './__generated__/UserFragmentStoryQuery.graphql';

const meta = preview.meta({
    component: UserFragment,
    parameters: {
        query: graphql`
            query UserFragmentStoryQuery @relay_test_operation {
                node(id: "test-id") {
                    ... on User {
                        ...UserFragment_user
                    }
                }
            }
        `,
        getReferenceEntry: (q) => ['user', q.node],
    } satisfies WithRelayParameters<UserFragmentStoryQuery>,
});

export default meta;

export const WithoutAvatar = meta.story({
    args: {
        user: {
            ' $fragmentSpreads': {
                UserFragment_user: true,
            },
        },
    },
    parameters: {
        //getReferenceEntry: (q) => ['user', q.node],
        mockResolvers: {
            User: (): UserFragment_user$data => ({
                login: 'login',
                company: 'company',
                avatarUrl: undefined,
                ' $fragmentType': 'UserFragment_user',
            }),
        },
    },
});

export const WithAvatar = meta.story({
    args: {
        ...WithoutAvatar.composed.args,
    },
    parameters: {
        mockResolvers: {
            User: (): UserFragment_user$data => ({
                login: 'login',
                company: 'company',
                avatarUrl: 'https://avatars2.githubusercontent.com/u/217931?v=3',
                ' $fragmentType': 'UserFragment_user',
            }),
        },
    },
});
