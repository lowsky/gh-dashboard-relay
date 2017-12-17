import React from 'react';

/* just include the README content on the start page */
const __html = require('html-loader!../../public/README.html');

const indexPageContent = () => (
    <div style={{ padding: '3em' }}>
        <div dangerouslySetInnerHTML={{ __html }} />
    </div>
);

export default indexPageContent;
