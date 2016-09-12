import React from 'react';

const BranchTable = ({ branch }) => {

    const
        liveLink = `http://${branch}.dashboard/`,
        githubBranchSrc = `https://github.com/lowsky/dashboard/tree/${branch}`;

    return (<tr className="warning" key={branch}>
        <td>
            <a href={liveLink}>{branch}</a>
        </td>
        <td>
            <a href={githubBranchSrc}>
                <img src='./assets/images/Octocat.jpg' width='32' alt='link to branch on github'>
                </img>
                on GitHub
            </a>
        </td>
    </tr>
    );
};

BranchTable.propTypes = {
    branch: React.PropTypes.array.isRequired
};

export default BranchTable;
