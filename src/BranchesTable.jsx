import React from 'react';

import BranchInfoRow from './BranchInfoRow.jsx'; // eslint-disable-line no-unused-vars

export const BranchesTable = React.createClass({

    props: {
        branches: React.PropTypes.array.required
    },

    render: function() {
        const { branches } = this.props;

        return (
            <table className="table table-striped table-bordered table-condensed">
                <thead>
                <tr>
                    <th>Live application</th>
                    <th>Branch</th>
                </tr>
                </thead>
                <tbody>
                {
                    branches.map(
                        branch => <BranchInfoRow branch={branch} key={branch}/>
                    )
                }
                </tbody>
            </table>
        );
    }
});

module.exports = BranchesTable;
