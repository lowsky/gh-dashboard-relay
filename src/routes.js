import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import IndexPageMain from './index/indexPage';
import RelayMain from './relay/main';
import RestfulMain from './restinpeace/restful';
import { NavBar } from './components/NavBar';

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
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route exact path="/home" component={IndexPageMain} />
                    <Route path="/relay/:repo" component={RelayMain} />
                    <Route path="/restful/:userName/:repoName" component={RestfulMain} />
                    <Redirect from="/relay" to="/relay/lowsky/dashboard" />
                    <Redirect from="/restful" to="/restful/lowsky/dashboard" />
                </Switch>
            </main>
        </div>
    </Router>
);

export default MainPage;
