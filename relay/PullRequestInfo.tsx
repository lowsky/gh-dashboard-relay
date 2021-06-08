import { createFragmentContainer, graphql } from 'react-relay';

import React from 'react';

export const Dude = ({ pullRequest }) => {
    return <a href={pullRequest.url} title={pullRequest.title}>#{pullRequest.number}</a>;
};
export default createFragmentContainer(Dude, {
    pullRequest: graphql`
        fragment PullRequestInfo_pullRequest on PullRequest {
            title
            number
            url
        }
    `,
});
