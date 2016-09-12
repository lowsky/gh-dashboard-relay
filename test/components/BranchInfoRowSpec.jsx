import React from 'react'; // eslint-disable-line no-unused-vars
import { expect } from 'chai';
import { shallow } from 'enzyme';

import BranchInfoRow from '../../src/components/BranchInfoRow';

describe('BranchInfoRow component', () => {
    const BRANCH_NAME = 'someBranchName';
    const dashComp = shallow(
        <BranchInfoRow branch={BRANCH_NAME} />
    );

    it('should render to a <tr> without className per default', () => {
        expect(dashComp.type()).to.equal('tr');
    });

    it('should have class warning', () => {
        expect(dashComp.props().className).to.equal('warning');
    });

    it('should have 2 columns', () => {
        const columns = dashComp.find('td');

        expect(columns).to.have.length(2);
    });

    it('first column should contain a link with text containing the branchName', () => {
        const firstColumn = dashComp.childAt(0);
        const aLink = firstColumn.find('a');

        expect(aLink.props().children).to.equal(BRANCH_NAME);
    });

});
