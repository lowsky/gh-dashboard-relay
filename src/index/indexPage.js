import React from 'react';

/* just include the README content on the start page */
const __html = require('html-loader!../../README.html');

const indexPageContent = () => (<div dangerouslySetInnerHTML={{ __html }}></div>);

export default indexPageContent;
