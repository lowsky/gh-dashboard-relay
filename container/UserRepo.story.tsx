import { Meta, StoryObj } from '@storybook/react';
import UserRepo from 'container/UserRepo';

import { WithAvatar } from 'components/User.story';
import { FakeData } from 'components/Repo.story';
import { User } from 'restinpeace/github';
import { RepoType } from 'components/Repo';

const meta: Meta<typeof UserRepo> = {
    component: UserRepo,
};
export default meta;

type Story = StoryObj<typeof UserRepo>;

export const WithUserAndRepo: Story = {
    args: {
        user: WithAvatar.args!.user as Readonly<User>,
        repo: { ...FakeData.args!.repo } as RepoType,
    },
};
