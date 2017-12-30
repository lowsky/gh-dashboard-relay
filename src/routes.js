import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';

import IndexPageMain from './index/indexPage';
import RelayMain from './relay/main';
import RestfulMain from './restinpeace/restful';

const MainPage = () => (
    <Router>
        <div>
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">
                            <a className="mdl-navigation__link" href="https://github.com/lowsky/dashboard/">
                                Github Repo Dashboard
                            </a>
                        </span>
                        <div className="mdl-layout-spacer" />
                        <nav className="mdl-navigation">
                            <Link className="mdl-navigation__link" to="/home">
                                Home
                            </Link>
                            <Link className="mdl-navigation__link" to="/relay">
                                GraphQL + Relay Demo
                            </Link>
                            <Link className="mdl-navigation__link" to="/restful">
                                RESTful Demo
                            </Link>
                        </nav>
                    </div>
                </header>

                <main className="mdl-layout__content">
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
        </div>
    </Router>
);

export default MainPage;
