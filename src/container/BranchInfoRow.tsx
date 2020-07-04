import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import UILibContext from '../components/UILibContext';

const BranchInfoRow = ({ branch }) => {
    const { name, lastCommit = {} } = branch;
    const githubBranchSrc = `https://github.com/lowsky/dashboard/tree/${name}`;
    const { CommitWithStatuses } = useContext(UILibContext);

    return (
        <tr key={name}>
            <td>
                <a href={githubBranchSrc}>{name}</a>
                <i className="fab fa-github" />
            </td>
            <td>
                {/* @ts-ignore*/}
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
