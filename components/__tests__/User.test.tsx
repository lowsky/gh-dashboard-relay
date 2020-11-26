import React from 'react';
import ReactDOM from 'react-dom';

import renderer from 'react-test-renderer';
import User from "../User";


describe('User component', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<User />, div);
    });

    it('should render as expected', () => {
        const user = {
            avatar_url: 'www.avatar.url',
            login: 'login',
            company: 'comp',
        };
        const appContainer = renderer.create(<User user={user} />).toJSON();
        expect(appContainer).toMatchSnapshot();
    });
});
