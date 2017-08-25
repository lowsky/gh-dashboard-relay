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
            updated_at: new Date().toISOString(),
        },
    ],
};

export default createFragmentContainer(
    CommitWithStatus,
    graphql`
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
            }
        }
    `
);
