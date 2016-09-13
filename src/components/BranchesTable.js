import React from 'react';

import BranchInfoRow from '../relay/BranchInfoRow';

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
                        branch => <BranchInfoRow branch={branch} key={branch.name} />
                    )
                }
                </tbody>
            </table>
        );
    }
});

export default BranchesTable;
