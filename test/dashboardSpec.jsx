import jsdom from 'jsdom';

import React, { TestUtils } from 'react/addons';
import { expect } from 'chai';

let DashboardRow = require('../src/DashboardRow');
let BranchesTableBody = require('../src/BranchesTableBody.jsx');
let TestUtils = React.addons.TestUtils;

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;

describe('Dashboard branch component', () => {

    describe('rendering', () => {
        let tableComp,
            dashComp;

        beforeEach(function () {
            tableComp = TestUtils.renderIntoDocument(<BranchesTableBody branches={['branchName']} />);
            dashComp = TestUtils.findRenderedComponentWithType(tableComp, DashboardRow);
        });

        it('should have class warning', () => {
            expect(React.findDOMNode(dashComp).className).to.equal('warning');
        });

        it('should have 2 columns', () => {
            let columns = TestUtils.scryRenderedDOMComponentsWithTag(dashComp, 'td');

            expect(columns.length).to.equal(2);
        });

        it('first column should contain the branchName', () => {
            let columns = TestUtils.scryRenderedDOMComponentsWithTag(dashComp, 'td'),
                firstColumn = columns[0],
                aLink = firstColumn.children[0];

            expect(aLink.textContent).to.equal('branchName');
        });
    });
});
