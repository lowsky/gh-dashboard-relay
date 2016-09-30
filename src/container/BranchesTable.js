import React from 'react';

import Ui from '../components';

const BranchesTable = (props) => {
    const {repo = { branches: [] }} = props;
    const BranchInfoRow = Ui.createBranchInfoRow(props);

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
                    repo.branches.map(branch => <BranchInfoRow branch={branch}/>)
                }
                </tbody>
            </table>
    );
};

export default BranchesTable;
