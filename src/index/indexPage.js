import React from 'react';
import {render} from 'react-dom';
const __html = require('../../README.adoc');

/* just include the README content on the start page */

let renderOrUpdate = () => {
    if (content) {
        const readmeElement = document.getElementById('readme');
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
