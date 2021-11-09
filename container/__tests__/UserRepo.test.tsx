import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import UserRepo, { UserRepoProps } from '../UserRepo';
import UILibContext from '../../components/UILibContext';
import { UILibPureComponents } from '../../components';

const user = {
    avatar_url: '',
    login:'dude'
};
const repo = {
    branches: [],
    name: 'name',
};
describe('UserRepo component', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<UserRepo />, div);
    });

    it('should render as expected', () => {
        const props: UserRepoProps = {
            user,
            repo,
        };

        const appContainer = renderer
            .create(
                <UILibContext.Provider value={UILibPureComponents}>
                    <UserRepo {...props} />
                </UILibContext.Provider>
            )
            .toJSON();
        expect(appContainer).toMatchSnapshot();
    });
});
