import React from 'react';

/* just include the README content on the start page */
const __html = 'dont include readme html file here ...';

const indexPageContent = () => (
    <div style={{ padding: '3em' }}>
        <div dangerouslySetInnerHTML={{ __html }} />
    </div>
);

export default indexPageContent;
