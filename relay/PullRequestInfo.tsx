import { graphql, useFragment } from 'react-relay';

import PullRequestInfo from '../components/PullRequestInfo';

export default function PRFragmentContainer(props) {
    const pullRequest = useFragment(
        graphql`
            fragment PullRequestInfo_pullRequest on PullRequest {
                title
                number
                url
            }
        `,
        props.pullRequest
    );
    return <PullRequestInfo pullRequest={pullRequest} />;
}
