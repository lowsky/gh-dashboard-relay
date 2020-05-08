import React, { lazy, Suspense } from 'react';

import { storiesOf } from '@storybook/react';
import { withLinks } from '@storybook/addon-links';
import { linkTo } from '@storybook/addon-links';

import { jsxDecorator } from 'storybook-addon-jsx';
import isChromatic from 'storybook-chromatic/isChromatic';

import Intro from './Intro';

import IndexPage from '../index/IndexPage';
import UserRepo from '../container/UserRepo';
import BranchesTable from '../container/BranchesTable';
import BranchInfoRow from '../container/BranchInfoRow';

import User from '../components/User';
import CommitWithStatuses from '../components/CommitWithStatuses';
import Repo from '../components/Repo';

const RelayPage = lazy(() => import('../relay/main'));
const RestfulPage = lazy(() => import('../restinpeace/restful'));

storiesOf('Intro', module)
    .addDecorator(jsxDecorator)
    .add('to this storybook', () => <Intro showApp={linkTo('UserRepo')} />);

const userWithoutAvatar = {
    login: 'login',
    id: '1234',
    company: 'company',
};
const userWithAvatar = {
    ...userWithoutAvatar,
    avatar_url: 'https://avatars2.githubusercontent.com/u/217931?v=3',
};

const commitData = {
    user: {
        ...userWithoutAvatar,
        avatar_url: 'https://avatars2.githubusercontent.com/u/217931?v=3',
    },
    commit: {
        sha: 'no-sha',
        date: 'no-date',
        message: 'no-message',
        status: [],
        author: {
            ...userWithAvatar.user,
            email: 'me@work',
            name: 'My-Name',
        },
    },
};

const branchInfo = {
    branch: {
        name: 'branch-x',
        lastCommit: commitData.commit,
    },
};

const branches = {
    repo: { branches: [branchInfo.branch] },
};

const repo = {
    repo: {
        owner: userWithAvatar.user,
        name: 'demo-repo',
        branches: branches.repo.branches,
    },
};

const userRepo = {
    github: {
        user: userWithAvatar.user,
        repo: repo.repo,
    },
};

const Suspensor = (storyFn) => <Suspense fallback={<div>delayed loading ...</div>}>{storyFn()}</Suspense>;

const pages = storiesOf('Pages', module)
    .addDecorator(jsxDecorator)
    .addDecorator(withLinks)
    .addDecorator(Suspensor)
    .add('main', () => <IndexPage />);
if (!isChromatic()) {
    pages.add('restful', () => <RestfulPage />);
    pages.add('relay', () => <RelayPage />);
}

storiesOf('Repo', module)
    .addDecorator(jsxDecorator)
    .add('fake data', () => <Repo {...repo} />);

storiesOf('User', module)
    .addDecorator(jsxDecorator)
    .add('without avatar', () => <User user={userWithoutAvatar} />)
    .add('with avatar', () => <User user={userWithAvatar} />);

const moreStatus = require('../restinpeace/lastCommitMock');

storiesOf('CommitStatus', module)
    .addDecorator(jsxDecorator)
    .add('with data', () => <CommitWithStatuses commit={moreStatus} user={commitData.user} />)
    .add('with no data', () => <CommitWithStatuses />);

storiesOf('BranchesTable', module)
    .addDecorator(jsxDecorator)
    .add('with one branch', () => <BranchesTable {...branches} />);

storiesOf('BranchInfoRow', module)
    .addDecorator(jsxDecorator)
    .add('with info', () => <BranchInfoRow {...branchInfo} />);

storiesOf('UserRepo', module)
    .addDecorator(jsxDecorator)
    .add('with user and repo', () => <UserRepo {...userRepo} />);
