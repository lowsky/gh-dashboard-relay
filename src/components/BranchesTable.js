import React, { PropTypes } from 'react';

import BranchInfoRow from './BranchInfoRow';

export const BranchesTable = React.createClass({

    propTypes: {
        branches: PropTypes.array.required
    },

    render: () => {
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

export default BranchesTable;
