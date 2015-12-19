import React from 'react';

let DashboardRow = require('./DashboardRow.jsx');

let BranchesTable = React.createClass({

    props: {
        branches: React.PropTypes.array.required
    },

    render: function() {
        return (
            <table className="table table-striped table-bordered table-condensed">
                <thead>
                <tr>
                    <th>Git branch</th>
                    <th>GitHub</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.branches.map(branch => {
                        return <DashboardRow branch={branch} key={branch}/>;
                    })
                }
                </tbody>
            </table>
        );
    }
});

module.exports = BranchesTable;
