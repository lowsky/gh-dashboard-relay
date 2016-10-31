import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import BranchInfoRow  from '../../src/container/BranchInfoRow';

describe('Dashboard branch component', () => {
    const BRANCH_NAME = 'someBranchName';
    const branch = {name: BRANCH_NAME};
    const dashComp = shallow(
        <BranchInfoRow branch={branch} />
    );

    it('should render to a <tr> without className per default', () => {
        expect(dashComp.type()).to.equal('tr');
    });

    xit('should have class warning', () => {
        expect(dashComp.props().className).to.equal('warning');
    });

    it('should have 3 columns', () => {
        const columns = dashComp.find('td');

        expect(columns).to.have.length(3);
    });

    it('first column should contain a link with text containing the branchName', () => {
        const firstColumn = dashComp.childAt(0);
        const aLink = firstColumn.find('a');

        expect(aLink.props().children).to.equal(BRANCH_NAME);
    });

});
