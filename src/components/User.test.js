import React from 'react';
import ReactDOM from 'react-dom';

import User from './User';
import renderer from 'react-test-renderer';

describe('User component', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<User />, div);
    });

    it('should render as expected', () => {
        const props = {
            avatar_url: 'www.avatar.url',
            login: 'login',
            company: 'comp',
        };
        const appContainer = renderer.create(<User {...props} />).toJSON();
        expect(appContainer).toMatchSnapshot();
    });
});
