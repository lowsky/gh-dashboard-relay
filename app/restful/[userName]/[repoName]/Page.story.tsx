import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import RestfulPage from 'app/restful/[userName]/[repoName]/page';
import { UILibPureComponents } from 'components';
import UILibContext from 'components/UILibContext';

const meta: Meta<typeof RestfulPage> = {
    title: 'Pages/Restful',
    component: RestfulPage,
    decorators: [(story) => <UILibContext.Provider value={UILibPureComponents}>{story()}</UILibContext.Provider>],
};

export default meta;

export const UserRepo: StoryObj<typeof RestfulPage> = {
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
