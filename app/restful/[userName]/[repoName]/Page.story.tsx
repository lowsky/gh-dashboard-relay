import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import RestfulPage from 'app/restful/[userName]/[repoName]/page';
import UILibContext from 'components/UILibContext';
import { UILibPureComponents } from 'components/UILibPureComponents';

const meta: Meta<typeof RestfulPage> = {
    title: 'Pages/Restful',
    component: RestfulPage,
    decorators: [(story) => <UILibContext.Provider value={UILibPureComponents}>{story()}</UILibContext.Provider>],
};

export default meta;

export const UserRepo: StoryObj<typeof RestfulPage> = {
    args: {},
    parameters: {
        // Disables Chromatic's snapshotting on a story level
        // This story is often running into API rate-limiting by GH
        chromatic: { disableSnapshot: true },
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
