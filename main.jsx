import React from 'react';
import ReactDOM from 'react-dom';


// import Relay from 'react-relay';
// import {IndexRoute, Route, Router} from 'react-router';
// import TodoApp from './components/TodoApp';
// import TodoList from './components/TodoList';
// import ViewerQueries from './queries/ViewerQueries';
//
// import {createHashHistory} from 'history';
// const history = useRouterHistory(createHashHistory)({ queryKey: false });
// const mountNode = document.getElementById('root');
// import {applyRouterMiddleware, useRouterHistory} from 'react-router';
// import useRelay from 'react-router-relay';

/*ReactDOM.render(
 <Router
 environment={Relay.Store}
 history={history}
 render={applyRouterMiddleware(useRelay)}>
 <Route path="/"
 component={TodoApp}
 queries={ViewerQueries}>
 <IndexRoute
 component={TodoList}
 queries={ViewerQueries}
 prepareParams={() => ({status: 'any'})}
 />
 <Route path=":status"
 component={TodoList}
 queries={ViewerQueries}
 />
 </Route>
 </Router>,
 mountNode
 );*/


import AppHomeRoute from './src/routes/AppHomeRoute';
import Relay from 'react-relay';
// ReactDOM.render(
//     <Relay.RootContainer
//         Component={App}
//         route={new AppHomeRoute()}
//     />,
//     document.getElementById('root')
// );

import {DashboardRow} from './src/DashboardRow.jsx';
import BranchesTable  from './src/BranchesTable.jsx';

const repo = 'lowsky/dashboard';

let branchesTable = document.getElementById('panel-body');

Relay.injectNetworkLayer(
    new Relay.DefaultNetworkLayer('http://localhost:8000/graphql', {
        fetchTimeout: 5000,   // Timeout after 30s.
        retryDelays: [2000],   // Only retry once after a 5s delay.
    })
);
// { getValue(id: "initialKey")
let KV= React.createClass({
    render: () => (<div>KV</div>)
});
// BranchesTable
let KVContainer = Relay.createContainer(KV, {
    prepareVariables () {
        return {
            id: 'initialKey'
        }
    },
    initialVariables: {
        id: 'initialKey'
    },
    fragments: {
        keyValue: (variables) => Relay.QL`
          fragment on KeyValueAPI {
                getValue(id: $id) {
                    id
                }
          }
        `
    },
    // keyValue { getValue(id: ${vars.id})
    name: 'KV'
});

let renderOrUpdateBranches = branches => {
    ReactDOM.render(
        <Relay.RootContainer
            Component={KVContainer}
            route={
                {
                    queries: {
                        keyValue: () => Relay.QL`
                            query { keyValue }
                        `
                    },
                    // paramDefinitions: {
                    //     id: {requiered: true}
                    // },
                    name: 'Key-Values',
                    params: {
                        id: 'initialKey',
                    },
                }
            }
    />,
    branchesTable
    ) ;
};


// route={new AppHomeRoute()}

let requestAndShowBranches = () => {
    let url = `https://api.github.com/repos/${repo}/branches`;
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);

            console.log('Github response: ', request.responseText);

            let branchNames = data.map(function (branch) {
                return branch.name;
            });
            console.log(branchNames.join(' / '));

            renderOrUpdateBranches(branchNames);

        } else {
            alert(`Load error, while trying to retrieve data from $url - respond status: `, request.status);
        }
    };
    request.onerror = () => {
        console.error('Error occured', request);
        alert(`Load error, while trying to retrieve data from $url`);
    };
    return request;
};

renderOrUpdateBranches([]);

// requestAndShowBranches().send();
