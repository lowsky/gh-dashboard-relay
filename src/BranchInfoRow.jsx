import React from 'react';
import Relay from 'react-relay';

import CommitWithStatuses from './CommitWithStatuses';

let BranchInfoRow = React.createClass({
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

export default Relay.createContainer(BranchInfoRow, {
    fragments: {
        branch: () => Relay.QL`
          fragment on GithubBranch {
            name
            lastCommit {
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
          }
        `
    }
});
