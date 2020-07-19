import React, { lazy, Suspense } from 'react';

import { withLinks } from '@storybook/addon-links';

import IndexPage from '../index/IndexPage';

const RelayPage = lazy(() => import('../relay/main'));
const RestfulPage = lazy(() => import('../restinpeace/restful'));

const withSuspenseFallback = (storyFn) => <Suspense fallback={<div>delayed loading ...</div>}>{storyFn()}</Suspense>;

export default {
    title: 'Pages',
    decorators: [withLinks, withSuspenseFallback],
};

export const Main = () => <IndexPage />;

Main.story = {
    name: 'main',
};

export const Restful = () => <RestfulPage />;

Restful.story = {
    name: 'restful',
    parameters: {
        chromatic: { disable: true },
    },
};

const params = { repoName: 'dashboard' };
export const Relay = () => <RelayPage match={params} />;

Relay.story = {
    name: 'relay',
    parameters: {
        chromatic: { disable: true },
    },
};
