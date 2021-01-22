/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
                        <Link href="/">Dashboard</Link>
                    </span>
                    <span className="navbar-item">
                        <Link href="/relay/lowsky/dashboard">GraphQL+Relay</Link>
                    </span>
                    <span className="navbar-item">
                        <a href="/story-book/index.html">Storybook</a>
                    </span>
                    <span className="navbar-item">
                        <a href="https://github.com/lowsky/dashboard/">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
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
                            <Link href="/relay/lowsky/dashboard">GraphQL + Relay Demo</Link>
                        </span>
                        <span className="navbar-item">
                            <Link href="/restful/lowsky/dashboard">RESTful Demo</Link>
                        </span>
                        <span className="navbar-item">
                            <a href="/story-book/index.html">Storybook</a>
                        </span>
                        <span className="navbar-item">
                            <a href="https://github.com/lowsky/dashboard/">
                                <span>
                                    <FontAwesomeIcon icon={faGithub} />
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
