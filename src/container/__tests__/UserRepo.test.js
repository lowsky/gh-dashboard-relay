import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import UserRepo from '../UserRepo';

const user = {};
const repo = { branches: [] };
const github = { user, repo };

describe('UserRepo component', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<UserRepo />, div);
    });

    it('should render as expected', () => {
        const props = { github };

        const appContainer = renderer.create(<UserRepo {...props} />).toJSON();
        expect(appContainer).toMatchSnapshot();
    });
});
