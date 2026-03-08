import preview from '../../.storybook/preview';

import CommitWithStatuses from './CommitWithStatuses';

import moreStatus from './lastCommitMock.json';
import { CommitWithStatuses_commit$data } from 'relay/__generated__/CommitWithStatuses_commit.graphql';

const meta = preview.meta({
    component: CommitWithStatuses,
});

export default meta;

export const WithData = meta.story({
    args: {
        commit: {
            ...moreStatus,
            // somehow broken: status: moreStatus.status satisfies CommitWithStatuses_commit$data['status'],
            author: undefined,
            status: undefined,
            ' $fragmentType': 'CommitWithStatuses_commit',
        } satisfies CommitWithStatuses_commit$data,
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
