import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
                            <Link className="mdl-navigation__link" to="/">
                                Home
                            </Link>
                            <Link className="mdl-navigation__link" to="relay.html">
                                GraphQL + Relay Demo
                            </Link>
                            <Link className="mdl-navigation__link" to="restful.html">
                                RESTful Demo
                            </Link>
                        </nav>
                    </div>
                </header>

                <main className="mdl-layout__content">
                    <Route exact path="/" component={IndexPageMain} />
                    <Route path="/relay.html" component={RelayMain} />
                    <Route path="/restful.html" component={RestfulMain} />
                </main>
            </div>
        </div>
    </Router>
);

const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.render(MainPage(), rootElement);
}
