import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import BranchesTable from '../BranchesTable';

describe('BranchesTable component', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        let repo = {
            branches: []
        };
        ReactDOM.render(<BranchesTable repo={repo} />, div);
    });

    it('should render as expected', () => {
        const props = { repo: {branches: [{}] }};
        const appContainer = renderer.create(<BranchesTable {...props} />).toJSON();
        expect(appContainer).toMatchSnapshot();
    });
});
