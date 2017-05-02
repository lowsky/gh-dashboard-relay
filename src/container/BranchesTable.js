import React from 'react';

import Ui from '../components';

const BranchesTable = props => {
    const { repo = { branches: [] } } = props;

    const BranchInfoRow = Ui.createBranchInfoRow(props);

    return (
        <table className="mdl-data-table mdl-js-data-table ">
            <thead>
                <tr>
                    <th className="mdl-data-table__cell--non-numeric">Branch</th>
                    <th className="mdl-data-table__cell--non-numeric">Commit</th>
                </tr>
            </thead>
            <tbody>
                {repo.branches.map((branch, idx) => <BranchInfoRow key={idx} branch={branch} />)}
            </tbody>
        </table>
    );
};

export default BranchesTable;
