import React from 'react';
import { StoryObj } from '@storybook/react';

import IndexPage from './page.mdx';
import UILibContext from 'components/UILibContext';
import { UILibPureComponents } from 'components/UILibPureComponents';

export default {
    title: 'Pages/Main',
    component: IndexPage,
    decorators: [(story) => <UILibContext.Provider value={UILibPureComponents}>{story()}</UILibContext.Provider>],
};

export const Index: StoryObj<typeof IndexPage> = {
    args: {},
    parameters: {
        /*
        storyshots: { disable: true },
        chromatic: { disable: true },
    
        _nextRouter: {
            pathname: "/restful/[userName]/[repoName]",
            asPath: "/restful/lowsky/test-repo",
            query: {
                userName: 'lowsky',
                repoName: 'test-repo',
            },
        },
         */
        nextjs: {
            appDirectory: true,
            navigation: {
                //pathname: '/restful/[userName]/[repoName]',
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
    /*
    _decorators: [
        (story, _context) => {
            console.log({ story, _context });
            return <UserRepoFromUrlProvider {
                ... {
                    userName: 'lowsky',
                    repoName: 'test-repo',
                }
                                            }>{story({
                userName: 'lowsky',
                repoName: 'test-repo',
            })}</UserRepoFromUrlProvider>;
        },
    ],
     */
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
