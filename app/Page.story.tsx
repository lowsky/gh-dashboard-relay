import { StoryObj } from '@storybook/react';

import IndexPage from './page.mdx';

export default {
    component: IndexPage,
};

export const Index: StoryObj<typeof IndexPage> = {
    args: {},
    parameters: {
        /*
        chromatic: { disable: true },
         */
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: '/restful/lowsky/test-repo',
                segments: [
                    ['userName', 'lowsky'],
                    ['repoName', 'test-repo'],
                ],
                query: {
                    userName: 'lowsky',
                    repoName: 'test-repo',
                },
            },
        },
    },
};

/* this does currently not work at all, and need
a different setup, with mocked Graphql Environment,
and properly setup.
Currently, failing because of:

 Invariant Violation: useRelayEnvironment: Expected to have found a Relay environment provided by a `RelayEnvironmentProvider` component. This usually means that useRelayEnvironment was used in a component that is not a descendant of a `RelayEnvironmentProvider`. Please make sure a `RelayEnvironmentProvider` has been rendered somewhere as a parent or ancestor of your component.

  46 |     };
  47 |
> 48 |     const data = useLazyLoadQuery<relayPageQuery>(GithubQuery, variables);
     |                  ^

export const Relay = (props) => {
    return <RelayRootMain {...props} />;
};
Relay.args = {
    userName: "lowsky",
    repoName: "dashboard"
};
Relay.parameters = {
    chromatic: { disable: true },
};
*/
