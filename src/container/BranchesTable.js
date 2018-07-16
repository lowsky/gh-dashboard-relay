import React from 'react';
import PropTypes from 'prop-types';

import Ui from '../components';

const BranchesTable = props => {
    const { repo = { branches: [] } } = props;

    const BranchInfoRow = Ui.createBranchInfoRow(props);

    return (
        <table className="table is-bordered is-striped is-hoverable">
            <thead>
                <tr>
                    <th className="is-narrow">Branch</th>
                    <th className="">Commit</th>
                </tr>
            </thead>
            <tbody>{repo.branches.map((branch, idx) => <BranchInfoRow key={idx} branch={branch} />)}</tbody>
        </table>
    );
};

BranchesTable.propTypes = {
    repo: PropTypes.shape({
        branch: PropTypes.arrayOf(PropTypes.string),
    }),
};

export default BranchesTable;
