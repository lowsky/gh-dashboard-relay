import React from 'react';

let DashboardRow = require('./DashboardRow');

let BranchesTable = React.createClass({

    props: {
        branches: React.PropTypes.array.required
    },

    render: function() {
        return (
            <table class="table table-striped table-bordered table-condensed">
                <thead>
                <tr>
                    <th>Git branch</th>
                    <th>GitHub</th>
                </tr>
                </thead>
                <tbody id="branchesTable">
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
