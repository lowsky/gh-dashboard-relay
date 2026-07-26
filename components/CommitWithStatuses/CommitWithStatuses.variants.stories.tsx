import preview from '../../.storybook/preview';

import CommitWithStatusesInline from './CommitWithStatusesInline';

import moreStatus from './lastCommitMock.json';

// Transform mock data to component props
const mockProps = {
    author: {
        user: {
            login: moreStatus.author.login,
            avatarUrl: moreStatus.author.avatarUrl,
            name: 'Test User',
        },
    },
    authoredDate: moreStatus.authoredDate,
    commitUrl: moreStatus.commitUrl,
    message: moreStatus.message,
    status: {
        contexts: moreStatus.status.map((s) => ({
            state: s.state,
            description: s.description,
            avatarUrl: s.avatarUrl,
            targetUrl: s.target_url,
            context: s.context,
        })),
    },
};

// ============================================
// Inline Card Stories (with Statuses in Author Row)
// ============================================

const meta = preview.meta({
    title: 'CommitWithStatuses/InlineCard',
    component: CommitWithStatusesInline,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
});

export default meta;

export const WithAllData = meta.story({
    name: 'With All Data',
    args: mockProps,
});

export const WithoutAuthor = meta.story({
    name: 'Without Author',
    args: {
        ...mockProps,
        author: undefined,
    },
});

export const WithoutStatus = meta.story({
    name: 'Without Status',
    args: {
        ...mockProps,
        status: undefined,
    },
});

export const WithLongMessage = meta.story({
    name: 'With Long Message',
    args: {
        ...mockProps,
        message:
            'feat: Add comprehensive feature implementation with multiple improvements and fixes for better user experience',
    },
});

export const WithoutAuthorAndStatus = meta.story({
    name: 'Without Author and Status',
    args: {
        ...mockProps,
        author: undefined,
        status: undefined,
    },
});
