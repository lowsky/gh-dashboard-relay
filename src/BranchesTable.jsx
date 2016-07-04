import React from 'react';
import Relay from 'react-relay';

import BranchInfoRow from './BranchInfoRow.jsx';

export const BranchesTable = React.createClass({
    render: function() {
        const { repo } = this.props;
        return (
            <table className="table table-striped table-bordered table-condensed">
                <thead>
                <tr>
                    <th>Live application</th>
                    <th>Branch</th>
                    <th>Commit</th>
                </tr>
                </thead>
                <tbody>
                {
                    repo.branches.map(
                        branch => <BranchInfoRow branch={branch} />
                    )
                }
                </tbody>
            </table>
        );
    }
});

export default Relay.createContainer(BranchesTable, {
    fragments: {
        repo: () => Relay.QL`
            fragment on GithubRepo {
                branches {
                    ${BranchInfoRow.getFragment('branch')}
                }
            }
        `
    }
});
