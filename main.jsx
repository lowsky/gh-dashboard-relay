'use strict';

var React = require('react');
var DashboardRow = require('./src/dashboard.jsx');

var branches = [
    'link_to_deployed_app',
    'dockerize',
    'master',
    'show-dummy-branches',
    'simple-web-app'
];

var branchesTable = document.getElementById('branchesTable');

React.render(
    <tbody>
    {
        branches.map(function(branch) {
            return <DashboardRow branch={branch} key={branch}/>;
        })
    }
    </tbody>,
    branchesTable);
