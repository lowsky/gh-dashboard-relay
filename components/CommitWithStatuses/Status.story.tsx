import preview from '../../.storybook/preview';

import { ContextStatusProps, Status } from './Status';

import moreStatus from './lastCommitMock.json';

const meta = preview.meta({
    component: Status,
});

export default meta;

export const Default = meta.story({
    args: {
        ...(moreStatus.status[0] satisfies ContextStatusProps),
    },
});
