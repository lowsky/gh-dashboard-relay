import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Page from 'app/waterfall/[userName]/[repoName]/page';
import { UILibPureComponents } from 'components';
import UILibContext from 'components/UILibContext';

const meta: Meta<typeof Page> = {
    title: 'Pages/Waterfall',
    component: Page,
    decorators: [(story) => <UILibContext.Provider value={UILibPureComponents}>{story()}</UILibContext.Provider>],
};

export default meta;

export const UserRepo: StoryObj<typeof Page> = {
    args: {},
    parameters: {
        /*
        chromatic: { disable: true },
         */
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
