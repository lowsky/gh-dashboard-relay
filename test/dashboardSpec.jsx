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
            tableComp = TestUtils.renderIntoDocument(<table><Dashboard /></table>);
            dashComp = TestUtils.findRenderedComponentWithType(tableComp, Dashboard);
        });

        it('should have class warning', () => {
            expect(React.findDOMNode(dashComp).className).to.equal('warning');
        });
    });
});
