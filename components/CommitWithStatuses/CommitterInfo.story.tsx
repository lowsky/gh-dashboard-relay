import preview from '../../.storybook/preview';

import { CommitterInfo } from './CommitterInfo';

import moreStatus from './lastCommitMock.json';

const meta = preview.meta({
    component: CommitterInfo,
});

export default meta;

export const WithData = meta.story({
    args: {
        author: moreStatus.author,
    },
});
