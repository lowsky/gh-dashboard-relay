import React from 'react';

import Ui from '../components';
import octocat from './octocat.jpg';

const BranchInfoRow = props => {
    const { branch = {} } = props;
    const { name, lastCommit = {} } = branch;
    const githubBranchSrc = `https://github.com/lowsky/dashboard/tree/${name}`;

    const CommitWithStatuses = Ui.createCommitWithStatuses(props);

    return (
        <tr key={name}>
            <td className="mdl-data-table__cell--non-numeric">
                <img src={octocat} width="32" alt="link to branch on github" />
                <a href={githubBranchSrc}>{name}</a>
            </td>
            <td className="mdl-data-table__cell--non-numeric">
                {<CommitWithStatuses commit={lastCommit} />}
            </td>
        </tr>
    );
};

export default BranchInfoRow;
