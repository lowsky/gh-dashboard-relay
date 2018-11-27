import React from 'react';
import PropTypes from 'prop-types';

import Ui from '../components';

const BranchesTable = props => {
    const { repo = {} } = props;
    const { branches = [] } = repo;

    const BranchInfoRow = Ui.createBranchInfoRow(props);

    return (
        <table className="table is-bordered is-striped is-hoverable">
            <thead>
                <tr>
                    <th className="is-narrow">Branch</th>
                    <th className="">Commit</th>
                </tr>
            </thead>
            <tbody>
                {branches.map((branch, idx) => (
                    <BranchInfoRow key={idx} branch={branch} />
                ))}
            </tbody>
        </table>
    );
};

BranchesTable.propTypes = {
    repo: PropTypes.shape({
        branches: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                lastCommit: PropTypes.object,
            })
        ),
    }),
};

export default BranchesTable;
