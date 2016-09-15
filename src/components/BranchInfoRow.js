import React from 'react';

const RelayCommitWithStatuses = require('../relay/CommitWithStatuses').default;
const DumpCommitWithStatuses = require('./CommitWithStatuses').default;

export const BranchInfoRow = props => {
    const { branch = {} } = props;
    const { name, lastCommit = {} } = branch,
        liveLink = `http://${name}.dashboard/`,
        githubBranchSrc = `https://github.com/lowsky/dashboard/tree/${name}`;
    const CommitWithStatuses = (props.relay) ? RelayCommitWithStatuses : DumpCommitWithStatuses;

    return (<tr key={name}>
            <td>
                <a href={liveLink}>{name}</a>
            </td>
            <td>
                <a href={githubBranchSrc}>
                    <img src='./assets/images/Octocat.jpg' width='32' alt='link to branch on github'>
                    </img>
                </a>
            </td>
            <td>
                <CommitWithStatuses commit={lastCommit} />
            </td>
        </tr>
    );
};

export default BranchInfoRow;
