import { graphql, useFragment } from 'react-relay';

import CommitWithStatus from '../components/CommitWithStatuses';

export default function CommitFragmentContainer(props) {
    const commit = useFragment(
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
                    avatar_url
                }
            }
        `,
        props.commit
    );

    return <CommitWithStatus commit={commit} />;
}
