import { createFragmentContainer, graphql } from 'react-relay';

import PullRequestInfo, { PullRequestInfoProps } from '../components/PullRequestInfo';

export default createFragmentContainer<PullRequestInfoProps>(PullRequestInfo, {
    pullRequest: graphql`
        fragment PullRequestInfo_pullRequest on PullRequest {
            title
            number
            url
        }
    `,
});
