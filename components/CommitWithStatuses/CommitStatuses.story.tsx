import preview from '../../.storybook/preview';

import { CommitStatuses } from './CommitStatuses';

import moreStatus from './lastCommitMock.json';

const meta = preview.meta({
    component: CommitStatuses,
});

export default meta;

export const WithData = meta.story({
    args: {
        statuses: moreStatus.status,
    },
});

export const WithNoData = meta.story({
    args: {},
});
