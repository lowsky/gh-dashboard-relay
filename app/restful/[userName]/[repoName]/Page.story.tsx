import { Meta, StoryObj } from '@storybook/react';

import RestfulPage from 'app/restful/[userName]/[repoName]/page';
import { UILibPureComponentsDecorator } from 'components/UILibContextDecorator';

const meta: Meta<typeof RestfulPage> = {
    component: RestfulPage,
    decorators: [UILibPureComponentsDecorator],
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
