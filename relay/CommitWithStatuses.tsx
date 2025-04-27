import { graphql, useFragment } from 'react-relay';

import CommitWithStatus from 'components/CommitWithStatuses/CommitWithStatuses';
import {
    CommitWithStatuses_commit$data,
    CommitWithStatuses_commit$key,
} from './__generated__/CommitWithStatuses_commit.graphql';

export default function CommitFragmentContainer(props) {
    const commit: CommitWithStatuses_commit$data = useFragment<CommitWithStatuses_commit$key>(
        graphql`
            fragment CommitWithStatuses_commit on Commit {
                authoredDate
                oid
                status {
                    id
                    commit {
                        oid
                    }
                    contexts {
                        avatarUrl
                        context
                        creator {
                            login
                        }
                        state
                        description
                        targetUrl
                    }
                    state
                }
                commitUrl
                abbreviatedOid
                message
                author {
                    user {
                        login
                        name
                        avatarUrl
                    }
                }
            }
        `,
        props.commit
    );

    return <CommitWithStatus commit={commit} />;
}
