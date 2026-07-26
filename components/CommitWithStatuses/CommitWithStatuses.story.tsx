import preview from '../../.storybook/preview';

import CommitWithStatuses from './CommitWithStatuses';

import moreStatus from './lastCommitMock.json';

const meta = preview.meta({
    component: CommitWithStatuses,
    args: {
        ...moreStatus,
        author: {
            user: moreStatus.author,
        },
        status:
            {
                contexts: moreStatus.status.map((s) => ({
                    state: s.state,
                    description: s.description,
                    avatarUrl: s.avatarUrl,
                    targetUrl: s.target_url,
                    context: s.context,
                }))
            }
    }
});

export default meta;

export const WithData = meta.story({

});

export const WithNoData = meta.story({
    args: {
        // empty, intentionally
        author: undefined,
        authoredDate: undefined,
        commitUrl: undefined,
        message: undefined,
        oid: undefined,
        status: undefined,
    },
});

export const WithLongMessage = meta.story({
    args: {
        message:
            'feat: Add comprehensive feature implementation with multiple improvements and fixes for better user experience',
    },
});
