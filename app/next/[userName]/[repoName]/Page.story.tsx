import { Meta, StoryObj } from '@storybook/react';

import Page from './page';
import UILibContext from 'components/UILibContext';
import { UILibPureComponents } from 'components';

const meta: Meta<typeof Page> = {
    // next's support for async react components
    // @ts-expect-error TS2322: Type  (props: any) => Promise<Element>  is not assignable to type  ComponentType<any>
    component: Page,
    title: 'Pages/Nextjs',
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
