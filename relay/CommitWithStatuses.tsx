import { createFragmentContainer, graphql } from 'react-relay';

import CommitWithStatus from '../components/CommitWithStatuses';

export const fakeCommitWithStatuses = {
    sha: '',
    message: 'fake commit.',
    date: '01.01.2016',
    status: [
        {
            context: 'check',
            description: 'some pre-commit check',
            sate: 'unknown',
            target_url: 'http://precommit.check/',
            avatar_url:
                'https://avatars1.githubusercontent.com/oa/581325?s=40&u=3d11470b9117a9024372113ecd1fc682b02395b8&v=4/',
            updated_at: new Date().toISOString(),
        },
    ],
};

export default createFragmentContainer(CommitWithStatus, {
    commit: graphql`
        fragment CommitWithStatuses_commit on GithubCommit {
            sha
            message
            date
            status {
                context
                description
                state
                target_url
                updated_at
                avatar_url
            }
        }
    `,
});
