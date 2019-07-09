import React from 'react';
import { shallow } from 'enzyme';

import BranchInfoRow from '../../container/BranchInfoRow';

describe('BranchInfoRow component', () => {
    const BRANCH_NAME = 'someBranchName';
    const branch = {
        name: BRANCH_NAME,
    };
    const dashComp = shallow(<BranchInfoRow branch={branch} />);

    it('should render to a <tr> without className per default', () => {
        expect(dashComp.type()).toBe('tr');
    });

    it('should have 2 columns', () => {
        const columns = dashComp.find('td');

        expect(columns).toHaveLength(2);
    });

    it('first column should contain a link with text containing the branchName', () => {
        const firstColumn = dashComp.childAt(0);
        const aLink = firstColumn.find('a');

        expect(aLink.props().children).toBe(BRANCH_NAME);
    });
});
