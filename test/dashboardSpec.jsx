import jsdom from 'jsdom';

import React, { TestUtils } from 'react/addons';
import { expect } from 'chai';

import Dashboard from '../src/dashboard';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;

describe('Dashboard branch component', () => {

    describe('rendering', () => {
        let tableComp,
            dashComp;

        beforeEach(function () {
            tableComp = TestUtils.renderIntoDocument(<table><tbody><DashboardRow branch='branchName' /></tbody></table>);
            dashComp = TestUtils.findRenderedComponentWithType(tableComp, DashboardRow);
        });

        it('should have class warning', () => {
            expect(React.findDOMNode(dashComp).className).to.equal('warning');
        });

        it('should have 2 columns', () => {
            let columns = TestUtils.scryRenderedDOMComponentsWithTag(dashComp, 'td');

            expect(columns.length).to.equal(2);
        });

        it('first column should contain link to github branch', () => {
            let columns = TestUtils.scryRenderedDOMComponentsWithTag(dashComp, 'td'),
                firstColumn = columns[0],
                aLink;

            aLink = TestUtils.findRenderedDOMComponentWithTag(firstColumn, 'a');
            expect(aLink.props.children).to.equal('branchName');
        });
    });
});
