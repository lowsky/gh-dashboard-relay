import React, { lazy, Suspense } from 'react';

import { withLinks, linkTo } from '@storybook/addon-links';

import Intro from './Intro';

import IndexPage from '../index/IndexPage';

const RelayPage = lazy(() => import('../relay/main'));
const RestfulPage = lazy(() => import('../restinpeace/restful'));

const withSuspenseFallback = (storyFn) => <Suspense fallback={<div>delayed loading ...</div>}>{storyFn()}</Suspense>;

export default {
    title: 'Pages',
    parameters: {
        chromatic: { disable: true },
    },
    decorators: [withLinks, withSuspenseFallback],
};

export const ToThisStorybook = () => <Intro showApp={linkTo('UserRepo')} />;

ToThisStorybook.story = {
    name: 'to this storybook',
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

export const Relay = () => <RelayPage />;

Relay.story = {
    name: 'relay',
    parameters: {
        chromatic: { disable: true },
    },
};
