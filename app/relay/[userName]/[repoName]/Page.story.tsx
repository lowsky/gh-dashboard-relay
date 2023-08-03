import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import RelayRoot from './page';
import { UILibPureComponents } from 'components';
import UILibContext from 'components/UILibContext';

const meta: Meta<typeof RelayRoot> = {
    title: 'Pages/Relay',
    component: RelayRoot,
    decorators: [(story) => <UILibContext.Provider value={UILibPureComponents}>{story()}</UILibContext.Provider>],
};

export default meta;

export const UserRepo: StoryObj<typeof RelayRoot> = {
    args: {},
    parameters: {
        chromatic: { disable: true },
        nextjs: {
            appDirectory: true,
            navigation: {
                segments: [
                    ['userName', 'lowsky'],
                    ['repoName', 'test-repo'],
                ],
            },
        },
    },
};
