import React from 'react';
import Relay from 'react-relay';

let DashboardRow = require('./DashboardRow.jsx');

let BranchesTable = React.createClass({

    props: {
        branches: React.PropTypes.array.required
    },

    render: function() {
        const { branches=[], keyValue= {} } = this.props;
        return (
            <table className="table table-striped table-bordered table-condensed">
                <thead>
                <tr>
                    <th>Git branch
                        {keyValue.id}
                        {keyValue.value}
                    </th>
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

// module.exports = BranchesTable;

export default Relay.createContainer(BranchesTable, {
    fragments: {
        keyValue: () => Relay.QL`
          fragment on KeyValueItem {
                id
                value
          }
        `
    }
});
