import React from 'react';
import {render} from 'react-dom';
const __html = require('../../README.adoc');

/* just include the README content on the start page */

let renderOrUpdate = () => {
    const readmeElement = document.getElementById('readme');
    if (readmeElement) {
        render((<div dangerouslySetInnerHTML={{ __html }}></div>), readmeElement);
    }
};

// init
renderOrUpdate();

// hot-module-reloading
if (module.hot) {
    module.hot.accept('../index/indexPage', () => {
        renderOrUpdate();
    });
}
