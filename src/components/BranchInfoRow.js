import React from 'react';

import CommitWithStatuses from '../relay/CommitWithStatuses';

export const BranchInfoRow = React.createClass({
    props: {
        branch: React.PropTypes.object
    },

    render: function() {
        const { name, lastCommit = {} } = this.props.branch,
              liveLink = `http://${name}.dashboard/`,
              githubBranchSrc = `https://github.com/lowsky/dashboard/tree/${name}`;

        return (<tr>
            <td>
                <a href={liveLink}>{name}</a>
            </td>
            <td>
                <a href={githubBranchSrc}>
                    <img src='./Octocat.jpg' width='32' alt='link to branch on github'>
                    </img>
                </a>
            </td>
            <td>
                <CommitWithStatuses commit={lastCommit} />
            </td>
        </tr>
        );
    }
});

export default BranchInfoRow;
