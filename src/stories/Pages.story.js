import React, { lazy, Suspense } from 'react';

import isChromatic from 'storybook-chromatic/isChromatic';

import { withLinks, linkTo } from '@storybook/addon-links';

import Intro from './Intro';

import IndexPage from '../index/IndexPage';

const RelayPage = lazy(() => import('../relay/main'));
const RestfulPage = lazy(() => import('../restinpeace/restful'));

const withSuspenseFallback = (storyFn) => <Suspense fallback={<div>delayed loading ...</div>}>{storyFn()}</Suspense>;

export default {
    title: 'Pages',
    excludeStories: isChromatic() ? ['Restful', 'Relay'] : [],
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
};

export const Relay = () => <RelayPage />;

Relay.story = {
    name: 'relay',
};
