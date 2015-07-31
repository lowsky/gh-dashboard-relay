'use strict';

import jsdom from 'jsdom';

var React = require('react/addons'),
    TestUtils = React.addons.TestUtils,
    Dashboard = require('../src/dashboard'),
    //jsdom = require('jsdom'),
    chai = require('chai'),
    expect = chai.expect;

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;

describe('Dashboard branch component', function() {

    it('renders correctly', function() {
        var tableComp = TestUtils.renderIntoDocument(<table><Dashboard /></table>);
        var dashComp = TestUtils.findRenderedComponentWithType(tableComp, Dashboard);

        expect(React.findDOMNode(dashComp).className).to.equal('warning');
    })
});
