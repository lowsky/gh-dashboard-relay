import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import IndexPageMain from './index/IndexPage';
import { NavBar } from './components/NavBar';
import { Spinner } from './components/Spinner';

const RelayMain = lazy(() => import('./relay/main'));
const RestfulMain = lazy(() => import('./restinpeace/restful'));

export const WarningMissingURLParams = (
    <div className="jumbo has-text-weight-bold has-text-danger has-text-centered">
        Sorry, this page needs a <i>user</i> and <i>repo</i> info as part orf url!
        <br/>
        <a href="/">Find links on the home page.</a>
    </div>
);
const routes = [
    {
        path: '/relay/:userName/:repoName',
        exact: true,
        _component: (props) => {
            console.log(props);
            return <div>{`${props.match.params.userName}`}</div>;
        },
        component: ({ match }) => <RelayMain {...match.params} />,
    },
    {
        path: '/relay',
        component: () => WarningMissingURLParams,
    },
    {
        path: '/restful/:userName/:repoName',
        // eslint-disable-next-line react/prop-types
        component: ({ match: { params } }) => <RestfulMain {...params} />,
    },
    {
        path: '/restful',
        component: () => WarningMissingURLParams,
    },
    {
        path: '/',
        component: IndexPageMain,
    },
    {
        path: '/home',
        component: (props) => (
            <div>
                {JSON.stringify(props)}
                <IndexPageMain {...props} />
            </div>
        ),
    },
];

const MainPage = () => (
    <Router>
        <div>
            <NavBar />
            <header>
                <div>
                    <nav />
                </div>
            </header>

            <main>
                <Suspense fallback={<Spinner />}>{renderRoutes(routes)}</Suspense>
            </main>
        </div>
    </Router>
);

export default MainPage;
