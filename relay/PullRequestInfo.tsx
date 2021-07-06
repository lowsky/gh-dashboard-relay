import { createFragmentContainer, graphql } from 'react-relay';

import React from 'react';

export const PR = ({ pullRequest }) => {
    return <a href={pullRequest.url} title={pullRequest.title}>#{pullRequest.number}</a>;
};
export default createFragmentContainer(PR, {
    pullRequest: graphql`
        fragment PullRequestInfo_pullRequest on PullRequest {
            title
            number
            url
        }
    `,
});
