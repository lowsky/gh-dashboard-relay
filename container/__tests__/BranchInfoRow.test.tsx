import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import BranchInfoRow from '../BranchInfoRow';
import UILibContext from '../../components/UILibContext';
import { UILibPureComponents } from '../../components';

describe('BranchInfoRow component', () => {
    const BRANCH_NAME = 'someBranchName';
    const branch = {
        name: BRANCH_NAME,
    };

    it('should render without crashing', () => {
        const tbody = document.createElement('tbody');
        ReactDOM.render(<BranchInfoRow branch={branch} />, tbody);
    });

    it('should render as expected', () => {
        const appContainer = renderer
            .create(
                <UILibContext.Provider value={UILibPureComponents}>
                    <BranchInfoRow branch={branch} />
                </UILibContext.Provider>
            )
            .toJSON();
        expect(appContainer).toMatchSnapshot();
    });
});
