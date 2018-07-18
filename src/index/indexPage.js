import React from 'react';

const indexPageContent = () => (
    <div style={{ padding: '3em' }}>
        <h2>Getting started</h2>
        <p>
            You can use the links in the nav bar for different "views"...
        </p>
        <ul>
            <li><b>Storybook</b> shows all components.</li>
            <li><b>GraphQL + Relay</b> - fetches all information from a locally installed relay server. this only works
                locally! Run the server via <br/>
                    <code>npm start</code>
            </li>
            <li><b>RESTFul Demo</b> - just fetches info from Github's public open API via Rest calls.</li>
        </ul>
        <p>This demo was just to figure out, how to setup mixing <b>Relay</b> and <b>regular</b> react components.</p>
    </div>
);

export default indexPageContent;
