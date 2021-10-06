import React, { lazy, Suspense } from 'react';

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
