import type { Meta, StoryObj } from '@storybook/react';

import { Box, Flex } from '@chakra-ui/react';

import CommitWithStatusesHover from './CommitWithStatusesHover';
import CommitWithStatusesPopover from './CommitWithStatusesPopover';
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
// Option 1: Hover Card Stories
// ============================================

export const HoverCardMeta = {
    title: 'CommitWithStatuses/HoverCard',
    component: CommitWithStatusesHover,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof CommitWithStatusesHover>;

type HoverStory = StoryObj<typeof HoverCardMeta>;

export const HoverWithAllData: HoverStory = {
    name: 'With All Data',
    args: mockProps,
};

export const HoverWithoutAuthor: HoverStory = {
    name: 'Without Author',
    args: {
        ...mockProps,
        author: undefined,
    },
};

export const HoverWithoutStatus: HoverStory = {
    name: 'Without Status',
    args: {
        ...mockProps,
        status: undefined,
    },
};

export const HoverWithLongMessage: HoverStory = {
    name: 'With Long Message',
    args: {
        ...mockProps,
        message:
            'feat: Add comprehensive feature implementation with multiple improvements and fixes for better user experience',
    },
};

// ============================================
// Option 2: Rich Popover Stories
// ============================================

export const RichPopoverMeta = {
    title: 'CommitWithStatuses/RichPopover',
    component: CommitWithStatusesPopover,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof CommitWithStatusesPopover>;

type PopoverStory = StoryObj<typeof RichPopoverMeta>;

export const PopoverWithAllData: PopoverStory = {
    name: 'With All Data',
    args: mockProps,
};

export const PopoverWithoutAuthor: PopoverStory = {
    name: 'Without Author',
    args: {
        ...mockProps,
        author: undefined,
    },
};

export const PopoverWithoutStatus: PopoverStory = {
    name: 'Without Status',
    args: {
        ...mockProps,
        status: undefined,
    },
};

export const PopoverWithLongMessage: PopoverStory = {
    name: 'With Long Message',
    args: {
        ...mockProps,
        message:
            'feat: Add comprehensive feature implementation with multiple improvements and fixes for better user experience',
    },
};

// ============================================
// Option 3: Inline Card Stories
// ============================================

export const InlineCardMeta = {
    title: 'CommitWithStatuses/InlineCard',
    component: CommitWithStatusesInline,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof CommitWithStatusesInline>;

type InlineStory = StoryObj<typeof InlineCardMeta>;

export const InlineWithAllData: InlineStory = {
    name: 'With All Data',
    args: mockProps,
};

export const InlineWithoutAuthor: InlineStory = {
    name: 'Without Author',
    args: {
        ...mockProps,
        author: undefined,
    },
};

export const InlineWithoutStatus: InlineStory = {
    name: 'Without Status',
    args: {
        ...mockProps,
        status: undefined,
    },
};

export const InlineWithLongMessage: InlineStory = {
    name: 'With Long Message',
    args: {
        ...mockProps,
        message:
            'feat: Add comprehensive feature implementation with multiple improvements and fixes for better user experience',
    },
};

// ============================================
// Comparison Stories
// ============================================

const ComparisonMeta = {
    title: 'CommitWithStatuses/Comparison',
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                story: 'Compare all three variants side by side to choose the best approach for your use case.',
            },
        },
    },
} satisfies Meta;

export default ComparisonMeta;
type ComparisonStory = StoryObj<typeof ComparisonMeta>;

export const AllVariantsComparison: ComparisonStory = {
    name: 'All Variants',
    render: () => (
        <Flex direction="column" gap={8}>
            <Box>
                <Box fontWeight="bold" mb={2} fontSize="sm" opacity={0.7}>
                    Option 1: Hover Card (Compact)
                </Box>
                <CommitWithStatusesHover {...mockProps} />
            </Box>

            <Box>
                <Box fontWeight="bold" mb={2} fontSize="sm" opacity={0.7}>
                    Option 2: Rich Popover (Detailed)
                </Box>
                <CommitWithStatusesPopover {...mockProps} />
            </Box>

            <Box>
                <Box fontWeight="bold" mb={2} fontSize="sm" opacity={0.7}>
                    Option 3: Inline Card (Accessible)
                </Box>
                <CommitWithStatusesInline {...mockProps} />
            </Box>
        </Flex>
    ),
};

export const AllVariantsDarkMode: ComparisonStory = {
    name: 'All Variants (Dark Mode)',
    render: () => (
        <Flex direction="column" gap={8} className="dark">
            <Box>
                <Box fontWeight="bold" mb={2} fontSize="sm" opacity={0.7}>
                    Option 1: Hover Card (Compact)
                </Box>
                <CommitWithStatusesHover {...mockProps} />
            </Box>

            <Box>
                <Box fontWeight="bold" mb={2} fontSize="sm" opacity={0.7}>
                    Option 2: Rich Popover (Detailed)
                </Box>
                <CommitWithStatusesPopover {...mockProps} />
            </Box>

            <Box>
                <Box fontWeight="bold" mb={2} fontSize="sm" opacity={0.7}>
                    Option 3: Inline Card (Accessible)
                </Box>
                <CommitWithStatusesInline {...mockProps} />
            </Box>
        </Flex>
    ),
};
