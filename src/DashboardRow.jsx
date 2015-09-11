import React from 'react';

let DashboardRow = React.createClass({

    props: {
        branch: React.PropTypes.string
    },

    render: function() {
        let branch = this.props.branch,
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
    }
});

module.exports = DashboardRow;
