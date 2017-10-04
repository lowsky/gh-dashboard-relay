/* eslint-disable prettier/prettier */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import User from '../src/components/User';
import IndexPage from '../src/index/indexPage';
import RelayPage from '../src/relay/main';
import RestfulPage from '../src/restinpeace/restful';
import Intro from './Intro';

storiesOf('Intro', module).add('to this storybook', () => <Intro showApp={linkTo('User')} />);

const userWithoutAvatar = {
    user: {
        login: 'login',
        id: '1234',
        company: 'company',
    },
};
const userWithAvatar = {
    user: {
        ...userWithoutAvatar.user,
        avatar_url: 'https://avatars2.githubusercontent.com/u/217931?v=3',
    },
};

storiesOf('Pages', module)
    .add('main', () => <IndexPage />)
    .add('restful', () => <RestfulPage />)
    .add('relay', () => <RelayPage />);

storiesOf('User', module)
    .add('without avatar', () => <User {...userWithoutAvatar} onClick={action('clicked')} />)
    .add('with avatar', () => <User {...userWithAvatar} onClick={action('clicked')} />);
