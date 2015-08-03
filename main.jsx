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

function renderOrUpdateBranches(branches) {
    React.render(
        <tbody>
        {
            branches.map(function (branch) {
                return <DashboardRow branch={branch} key={branch}/>;
            })
        }
        </tbody>,
        branchesTable);
}

var repo = 'lowsky/dashboard';

function requestAndShowBranches() {
    var url = 'https://api.github.com/repos/' + repo + '/branches';
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);

            console.log(data);

            var branchNames = data.map(function (item) {
                return item.name;
            });
            console.log(branchNames);

            renderOrUpdateBranches(branchNames);
        } else {
            alert('Load error, while trying to retrieve data from ' + url +
                ' Server respond: ' + request.responseText);
        }
    };
    request.onerror = function () {
        console.error(request);
        alert('Load error, while trying to retrieve data from ' + url);
    };
    return request;
}

renderOrUpdateBranches([]);

requestAndShowBranches().send();
