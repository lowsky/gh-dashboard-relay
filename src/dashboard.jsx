'use strict';

//if( typeof env != undefined ) {
    var React = require('react');
//}

var DashboardRow = React.createClass({

    props: {
        branch: React.PropTypes.string
    },

    render: function() {
        var branch = this.props.branch;
        var liveLink = 'http://' + branch + '.dashboard/';
        var githubBranchSrc = 'https://github.com/lowsky/dashboard/tree/' + branch;

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
