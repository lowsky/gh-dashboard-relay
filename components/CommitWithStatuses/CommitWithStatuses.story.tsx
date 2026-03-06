import preview from '../../.storybook/preview';

import CommitWithStatuses from './CommitWithStatuses';

import moreStatus from './lastCommitMock.json';

const meta = preview.meta({
    component: CommitWithStatuses,
});

export default meta;

export const WithData = meta.story({
    args: {
        // @ts-expect-error neeeds further adoption: not matching data
        commit: moreStatus,
    },
});

export const WithNoData = meta.story({
    args: {
        // empty, intentionally
        commit: {
            abbreviatedOid: '',
            author: undefined,
            authoredDate: undefined,
            commitUrl: undefined,
            message: '',
            oid: undefined,
            status: undefined,
            ' $fragmentType': 'CommitWithStatuses_commit',
        },
    },
});
