import React from 'react';
import ReactDOM from 'react-dom';

import renderer from 'react-test-renderer';

import { BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from "../NavBar";

describe('NavBar component', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Router>
                <NavBar />
            </Router>,
            div
        );
    });

    it('should render as expected', () => {
        const props = {
            avatar_url: 'www.avatar.url',
            login: 'login',
            company: 'comp',
        };
        const appContainer = renderer
            .create(
                <Router>
                    <NavBar {...props} />
                </Router>
            )
            .toJSON();
        expect(appContainer).toMatchSnapshot();
    });
});
