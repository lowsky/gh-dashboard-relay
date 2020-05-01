/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

export class NavBar extends React.Component {
    state = { burgerActive: false };

    toggleNavbar = () => {
        this.setState(state => ({
            // @ts-ignore
            burgerActive: !state.burgerActive,
        }));
    };

    render() {
        return (
            <nav className="navbar" aria-label="main navigation">
                <div className="navbar-brand">
                    <span className="navbar-item">
                        <a href="https://github.com/lowsky/dashboard/">Dashboard</a>
                    </span>
                    <a
                        role="button"
                        className={'navbar-burger ' + (this.state.burgerActive ? 'is-active' : '')}
                        aria-label="menu"
                        aria-expanded="false"
                        onClick={this.toggleNavbar}>
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </a>
                </div>
                <div
                    className={'navbar-menu ' + (this.state.burgerActive ? 'is-active' : '')}
                    id="navMenu"
                    aria-label="menu"
                    aria-expanded="false">
                    <div className="navbar-start">
                        <span className="navbar-item">
                            <Link to="/home">Home</Link>
                        </span>
                        <span className="navbar-item">
                            <a href="./story-book/">Storybook</a>
                        </span>
                        <span className="navbar-item">
                            <Link to="/relay">GraphQL + Relay Demo</Link>
                        </span>
                        <span className="navbar-item">
                            <Link to="/restful">RESTful Demo</Link>
                        </span>
                        <span className="navbar-item">
                            <a href="https://github.com/lowsky/dashboard/">
                                <span>
                                    <i className="fab fa-github" />
                                    &nbsp; Github Repo
                                </span>
                            </a>
                        </span>
                    </div>
                </div>
            </nav>
        );
    }
}
