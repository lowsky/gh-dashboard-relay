import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';

import IndexPageMain from './index/indexPage';
import RelayMain from './relay/main';
import RestfulMain from './restinpeace/restful';

const MainPage = () => (
    <Router>
        <div>
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <span className="navbar-item">
                            <a href="https://github.com/lowsky/dashboard/">Dashboard</a>
                        </span>
                        <div className="navbar-burger" data-target="navMenu" >
                            <span aria-hidden="true" />
                            <span aria-hidden="true" />
                            <span aria-hidden="true" />
                        </div>
                    </div>

                    <div className={'navbar-menu '} id="navMenu" aria-label="menu" aria-expanded="false">
                        <div className="navbar-start">
                            <span className="navbar-item">
                                <Link to="/home">Home</Link>
                            </span>
                            <span className="navbar-item">
                                <a href="./story-book">Storybook</a>
                            </span>
                            <span className="navbar-item">
                                <Link to="/relay">GraphQL + Relay Demo</Link>
                            </span>
                            <span className="navbar-item">
                                <Link to="/restful">RESTful Demo</Link>
                            </span>
                        </div>

                        <div className="navbar-end">
                            <span className="navbar-item">
                                <a href="https://github.com/lowsky/dashboard/">
                                    <span>
                                        <i className="fab fa-github" />
                                    </span>
                                    <span>Github Repo</span>
                                </a>
                            </span>
                        </div>
                    </div>
                </nav>
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
        </div>
    </Router>
);

export default MainPage;
