import React, { lazy, Suspense } from 'react';

// import isChromatic from 'storybook-chromatic/isChromatic';

import { withLinks, linkTo } from '@storybook/addon-links';

import { jsxDecorator } from 'storybook-addon-jsx';

import Intro from './Intro';

import IndexPage from '../index/IndexPage';

const RelayPage = lazy(() => import('../relay/main'));
const RestfulPage = lazy(() => import('../restinpeace/restful'));

const Suspensor = (storyFn) => <Suspense fallback={<div>delayed loading ...</div>}>{storyFn()}</Suspense>;

export default {
    title: 'Pages',
    decorators: [jsxDecorator, withLinks, Suspensor],

};

export const ToThisStorybook = () => <Intro showApp={linkTo('UserRepo')} />;

export const Main = () => <IndexPage />;
export const Restful = () => <RestfulPage />;
export const Relay = () => <RelayPage />;
