/* eslint-disable no-undef */

// import {  } from 'cypress-match-screenshot';

export const pages = [
    'pages--main',
    'userrepo--with-user-and-repo',
    'user--with-avatar',
    'branchestable--with-one-branch',
];

describe('VisualRegression', () => {
    // eslint-disable-next-line array-callback-return
    pages.map((path) => {
        const filename = path.replace(/^\//, '').replace(/\//gi, '_');

        const flags = [];
        if (Cypress.browser.isHeaded) flags.push('headed');
        if (Cypress.browser.isHeadless) flags.push('headless');

        it(path, () => {
            cy.visit('/iframe.html?id=' + path)
                .url()
                .should('contain', path, LogAndWaitLong);
            cy.wait(2500); // for loading all icons
            // cy.get('body').type('A') /* shortcut for hiding addons view*/.type('S'); // shortcut for hiding stories view
            cy.log('Filename: ' + filename);
            doScreenshot(filename);

            cy.matchScreenshot(flags.join('_'));
        });
    });
});

function doScreenshot(filename) {
    cy.screenshot(filename, {
        // capture: 'runner' | 'viewport' | 'fullPage'
        capture: 'fullPage',
        timeout: 50000,
    });
}

let LogAndWaitLong = {
    log: false,
    timeout: 2000,
};
