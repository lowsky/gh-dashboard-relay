import React, { Suspense } from 'react';

import IndexPage from '../pages';
import { RestfulMain } from '../pages/restful/[userName]/[repoName]';

import { RelayRootMain } from'../pages/relay/[userName]/[repoName]';

const withSuspenseFallback = (storyFn) => <Suspense fallback={<div>delayed loading ...</div>}>{storyFn()}</Suspense>;

export default {
    title: 'Others/Pages',
    decorators: [withSuspenseFallback],
};

export const Main = () => <IndexPage />;

Main.storyName = 'main';

export const Restful = (props) => <RestfulMain {...props} />;
Restful.parameters = {
    chromatic: { disable: true },
};
Restful.args = {
    userName: "lowsky",
    repoName: "dashboard"
};

/* this does currently not work at all, and need
a different setup, with mocked Graphql Environment,
and properly setup.
Currently failing caused by:

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