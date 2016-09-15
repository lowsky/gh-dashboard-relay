import React from 'react';

const RelayBranchInfoRow = require('../relay/BranchInfoRow').default;
const DumpBranchInfoRow = require('./BranchInfoRow').default;


export const BranchesTable = (props) => {
    function key (key1, key2) {
        if (key1) return key1; else return key2;
    }

    const BranchInfoRow = (props.relay) ? RelayBranchInfoRow : DumpBranchInfoRow;

    const {
        repo = {
            branches: []
        }
    } = props;

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
                    branch => <BranchInfoRow branch={branch} key={key(branch.__dataID__, branch.name)}/>
                )
            }
            </tbody>
        </table>
    );
};

export default BranchesTable;
