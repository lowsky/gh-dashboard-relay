import React from 'react';
import ReactDOM from 'react-dom';

import renderer from 'react-test-renderer';
import CommitWithStatuses from "../CommitWithStatuses";

export const status = {
    target_url: 'target_url',
    state: 'state',
    description: 'description',
    context: 'context',
};
export const commit = {
    sha: '<missing>',
    date: '01.01.2001',
    message: 'some-message,',
    status: [status],
    author: {
        avatar_url: 'avatar_url',
        name: 'name',
        login: 'login',
        email: 'email',
    },
};

describe('CommitWithStatuses component', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CommitWithStatuses />, div);
    });

    it('should render as expected', () => {
        const props = {
            commit,
        };
        const appContainer = renderer.create(<CommitWithStatuses {...props} />).toJSON();
        expect(appContainer).toMatchSnapshot();
    });
});
