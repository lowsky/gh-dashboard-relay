import React from 'react';

// import { CommitWithStatuses } from '../components';
// import CommitWithStatuses from '../components/CommitWithStatuses';
import Ui from '../components';

const BranchInfoRow = props => {
    const { branch = {} } = props;
    const { name, lastCommit = {} } = branch,
        liveLink = `http://${name}.dashboard/`,
        githubBranchSrc = `https://github.com/lowsky/dashboard/tree/${name}`;

    const CommitWithStatuses = Ui.createCommitWithStatuses(props);

    return (<tr key={name}>
            <td className="mdl-data-table__cell--non-numeric">
                {name}
            </td>
            <td className="mdl-data-table__cell--non-numeric">
                <img src='./assets/images/Octocat.jpg' width='32' alt='link to branch on github'>
                </img>
                <a href={githubBranchSrc}>{name}</a>
            </td>
            <td className="mdl-data-table__cell--non-numeric">{
                <CommitWithStatuses commit={lastCommit} />
            }
            </td>
        </tr>
    );
};


export default BranchInfoRow;
