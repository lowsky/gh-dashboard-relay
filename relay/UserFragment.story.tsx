import { Meta, StoryObj } from '@storybook/react';

import { graphql } from 'react-relay';

import { relayDecorator, WithRelayParameters } from './relayDecorator';

import UserFragment from '../relay/UserFragment';
import { UserFragment_user$data } from './__generated__/UserFragment_user.graphql';
import { UserFragmentStoryQuery } from './__generated__/UserFragmentStoryQuery.graphql';

const meta: Meta<typeof UserFragment> = {
    component: UserFragment,
    decorators: [relayDecorator],
};

export default meta;

type Story = StoryObj<typeof UserFragment>;

export const WithoutAvatar: Story = {
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
        mockResolvers: {
            User: (): UserFragment_user$data => ({
                login: 'login',
                company: 'company',
                avatarUrl: undefined,
                ' $fragmentType': 'UserFragment_user',
            }),
        },
    } satisfies WithRelayParameters<UserFragmentStoryQuery>,
};

export const WithAvatar: Story = {
    parameters: {
        ...WithoutAvatar.parameters,
        mockResolvers: {
            User: (): UserFragment_user$data => ({
                login: 'login',
                company: 'company',
                avatarUrl: 'https://avatars2.githubusercontent.com/u/217931?v=3',
                ' $fragmentType': 'UserFragment_user',
            }),
        },
    }, // missing query ...: satisfies WithRelayParameters<UserFragmentStoryQuery>,
};
