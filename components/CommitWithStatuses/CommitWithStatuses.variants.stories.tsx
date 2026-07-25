import type { Meta, StoryObj } from '@storybook/react';

import CommitWithStatusesInline from './CommitWithStatusesInline';

import mockData from './lastCommitMock.json';

// Transform mock data to component props
const mockProps = {
    author: mockData.author
        ? {
              user: {
                  login: mockData.author.login,
                  avatarUrl: mockData.author.avatarUrl,
                  name: 'Test User',
              },
          }
        : undefined,
    authoredDate: mockData.authoredDate,
    commitUrl: mockData.commitUrl,
    message: mockData.message,
    status: mockData.status
        ? {
              contexts: mockData.status.map((s) => ({
                  state: s.state,
                  description: s.description,
                  avatarUrl: s.avatarUrl,
                  targetUrl: s.target_url,
                  context: s.context,
              })),
          }
        : undefined,
};

// ============================================
// Inline Card Stories (with Statuses in Author Row)
// ============================================

const meta = {
    title: 'CommitWithStatuses/InlineCard',
    component: CommitWithStatusesInline,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof CommitWithStatusesInline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithAllData: Story = {
    name: 'With All Data',
    args: mockProps,
};

export const WithoutAuthor: Story = {
    name: 'Without Author',
    args: {
        ...mockProps,
        author: undefined,
    },
};

export const WithoutStatus: Story = {
    name: 'Without Status',
    args: {
        ...mockProps,
        status: undefined,
    },
};

export const WithLongMessage: Story = {
    name: 'With Long Message',
    args: {
        ...mockProps,
        message:
            'feat: Add comprehensive feature implementation with multiple improvements and fixes for better user experience',
    },
};

export const WithoutAuthorAndStatus: Story = {
    name: 'Without Author and Status',
    args: {
        ...mockProps,
        author: undefined,
        status: undefined,
    },
};
