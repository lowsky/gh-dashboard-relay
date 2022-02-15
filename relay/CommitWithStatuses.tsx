import { createFragmentContainer, graphql } from 'react-relay';

import CommitWithStatus from '../components/CommitWithStatuses';

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
