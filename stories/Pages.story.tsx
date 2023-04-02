import React from 'react';

// temporarily disabled, until mdx is set-up for storybook properly: import IndexPage from '../pages/index.mdx';
import RestfulPage from '../pages/restful/[userName]/[repoName]';
import { UserRepoFromUrlProvider } from '../components/useUserRepoFromRoute';

// temporary disabled import { RelayRootMain } from'../pages/relay/[userName]/[repoName]';

export default {
    title: 'Others/Pages',
};

// disabled, see above export const Main = () => <IndexPage />;

export const Restful = (props) => <RestfulPage {...props} />;
Restful.parameters = {
    storyshots: { disable: true },
    chromatic: { disable: true },
    nextjs: {
        appDirectory: false,
        navigation: {
            pathname: '/restful/[userName]/[repoName]',
            query: {
                userName: 'lowsky',
                repoName: 'test-repo',
            },
        },
    },
};

// still does not work
Restful.decorators = [
    (story) => {
        return <UserRepoFromUrlProvider>{story}</UserRepoFromUrlProvider>;
    },
];

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
