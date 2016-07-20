import React from 'react'; // eslint-disable-line no-unused-vars
export default ({branch}) => {

    const
        liveLink = `http://${branch}.dashboard/`,
        githubBranchSrc = `https://github.com/lowsky/dashboard/tree/${branch}`;

    return (<tr className="warning" key={branch}>
        <td>
            <a href={liveLink}>{branch}</a>
        </td>
        <td>
            <a href={githubBranchSrc}>
                <img src='./Octocat.jpg' width='32' alt='link to branch on github'>
                </img>
                on GitHub
            </a>
        </td>
    </tr>
    );
};
