import React, { lazy, Suspense } from 'react';

import IndexPage from '../pages';
import { RestfulMain } from '../pages/restful/[userName]/[repoName]';

const RelayPage = lazy(() => import('../pages/relay/[userName]/[repoName]'));
//const RestfulPage = lazy(() => import('../pages/restful/[userName]/[repoName]'));

const withSuspenseFallback = (storyFn) => <Suspense fallback={<div>delayed loading ...</div>}>{storyFn()}</Suspense>;

export default {
    title: 'Others/Pages',
    //decorators: [withSuspenseFallback],
};

export const Main = () => <IndexPage />;

Main.storyName = 'main';

export const Restful = () => <RestfulMain />;

Restful.storyName = 'restful';

Restful.parameters = {
    chromatic: { disable: true },
};

const params = { repoName: 'dashboard' };
export const Relay = () => <RelayPage match={params} />;

Relay.storyName = 'relay';

Relay.parameters = {
    chromatic: { disable: true },
};
