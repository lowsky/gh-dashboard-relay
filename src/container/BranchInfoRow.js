import React from 'react';
import PropTypes from 'prop-types';

import { UILibContext } from '../components';

const BranchInfoRow = props => {
    const { branch = {} } = props;
    const { name, lastCommit = {} } = branch;
    const githubBranchSrc = `https://github.com/lowsky/dashboard/tree/${name}`;

    return (
        <UILibContext.Consumer>
            {({ CommitWithStatuses }) => (
        <tr key={name}>
            <td>
                <a href={githubBranchSrc}>{name}</a>
                <i className="fab fa-github" />
            </td>
            <td>
                <CommitWithStatuses commit={lastCommit} />
            </td>
        </tr>
            )}
        </UILibContext.Consumer>
    );
};

BranchInfoRow.propTypes = {
    branch: PropTypes.shape({
        name: PropTypes.string,
        lastCommit: PropTypes.object,
    }),
};

export default BranchInfoRow;
