import { Meta, StoryObj } from '@storybook/react';
import { FakeData } from 'components/Repo.story';
import { UserRepoPageContent } from '../app/relay/[userName]/[repoName]/RelayRoot';

const meta: Meta<typeof UserRepoPageContent> = {
    component: UserRepoPageContent,
};
export default meta;

type Story = StoryObj<typeof UserRepoPageContent>;

export const WithUserAndRepo: Story = {
    args: {
        ...FakeData.args,
    },
};
