import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import UserRepo from '../UserRepo';

const  github = {} ;
const  user = {};
const repo = { branches: [] };

describe('UserRepo component', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<UserRepo />, div);
    });

    it('should render as expected', () => {
        const props = { branches: [{}] };
        const appContainer = renderer.create(<UserRepo {...props} />).toJSON();
        expect(appContainer).toMatchSnapshot();
    });
});
