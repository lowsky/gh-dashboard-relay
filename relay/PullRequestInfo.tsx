import { createFragmentContainer, graphql } from 'react-relay';

import PullRequestInfo from '../components/PullRequestInfo';

export default createFragmentContainer(PullRequestInfo, {
    pullRequest: graphql`
        fragment PullRequestInfo_pullRequest on PullRequest {
            title
            number
            url
        }
    `,
});
