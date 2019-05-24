import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import IndexPageMain from './index/indexPage';
import { NavBar } from './components/NavBar';
import { Spinner } from './components/Spinner';

const RelayMain = lazy(() => import('./relay/main'));
const RestfulMain = lazy(() => import('./restinpeace/restful'));

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
                <Suspense fallback={<Spinner />}>
                    <Switch>
                        <Redirect exact from="/" to="/home" />
                        <Route exact path="/home" component={IndexPageMain} />
                        <Route path="/relay/:repo" component={RelayMain} />
                        <Route
                            path="/restful/:userName/:repoName"
                            component={({ match }) => <RestfulMain {...match.params} />}
                        />
                        <Redirect from="/relay" to="/relay/lowsky/dashboard" />
                        <Redirect from="/restful" to="/restful/lowsky/dashboard" />
                    </Switch>
                </Suspense>
            </main>
        </div>
    </Router>
);

export default MainPage;
