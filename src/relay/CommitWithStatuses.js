import React from 'react';
import Relay from 'react-relay';

import CommitWithStatus from '../components/CommitWithStatuses';

export default Relay.createContainer(CommitWithStatus, {
    fragments: {
        commit: () => Relay.QL`
            fragment on GithubCommit {
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
    }
});

