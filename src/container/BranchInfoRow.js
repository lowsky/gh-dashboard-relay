import React from 'react';
import PropTypes from 'prop-types';

import Ui from '../components';

const BranchInfoRow = props => {
    const { branch = {} } = props;
    const { name, lastCommit = {} } = branch;
    const githubBranchSrc = `https://github.com/lowsky/dashboard/tree/${name}`;

    const CommitWithStatuses = Ui.createCommitWithStatuses(props);

    return (
        <tr key={name}>
            <td>
                <a href={githubBranchSrc}>{name}</a>
                <i className="fab fa-github" />
            </td>
            <td>
                <CommitWithStatuses commit={lastCommit} />
            </td>
        </tr>
    );
};

BranchInfoRow.propTypes = {
    branch: PropTypes.shape({
        name: PropTypes.string,
        lastCommit: PropTypes.object,
    }),
};

export default BranchInfoRow;
