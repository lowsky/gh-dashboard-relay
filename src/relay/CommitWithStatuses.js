import React from 'react';
import Relay from 'react-relay';

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
            updated_at: new Date().toISOString()
        }
    ]
};

export default Relay.createContainer(CommitWithStatus, {
    fragments: {
        commit: () => Relay.QL`
            fragment on GithubCommit {
                sha
                message
                date
                author {
                    ... on GithubCommitAuthor {
                        name
                        email
                    }
                    ... on  GithubUser{
                        login 
                        avatar_url
                    }
                }
                status {
                    context
                    description
                    state
                    target_url
                    updated_at
                }
            }
        `
    }
});

