import preview from '../../.storybook/preview';

import CommitWithStatuses from './CommitWithStatuses';

import moreStatus from './lastCommitMock.json';

const meta = preview.meta({
    component: CommitWithStatuses,
});

export default meta;

export const WithData = meta.story({
    args: {
        ...moreStatus,
        // somehow broken: status: moreStatus.status satisfies CommitWithStatuses_commit$data['status'],
        author: undefined,
        status: undefined,
    },
});

export const WithNoData = meta.story({
    args: {
        // empty, intentionally
        author: undefined,
        authoredDate: undefined,
        commitUrl: undefined,
        message: '',
        oid: undefined,
        status: undefined,
        ' $fragmentType': 'CommitWithStatuses_commit',
    },
});
