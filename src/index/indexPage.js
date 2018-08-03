import React from 'react';

const indexPageContent = () => (
    <div style={{ padding: '3em' }}>
        <div className="title">
            <h1>Getting started</h1>
        </div>
        <div className="content">
            <p>You can use the links above in the nav bar for different views:</p>
            <ul>
                <li>
                    <b>Storybook</b> shows all components.
                </li>
                <li>
                    <b>GraphQL + Relay</b> - fetches all information from a locally installed relay server. <b>Note:</b>
                    <i>
                        This only works locally! See <a href="#localserver">Run local server</a>
                    </i>
                </li>
                <li>
                    <b>RESTFul Demo</b> - just fetches info from Github&apos;s public open API via Rest calls.
                </li>
            </ul>
            <p>
                This demo was just to figure out, how to setup mixing <b>Relay</b> and <b>regular</b> react components.
            </p>
            <h4 className="is-size-4">Examples</h4>
            <ul>
                <li>
                    Rest-based &nbsp;
                    <a href="./restful/lowsky/dashboard">
                        <b>lowsky/dashboard</b>
                    </a>
                </li>
                <li>
                    Relay based &nbsp;
                    <a href="./restful/lowsky/dashboard">
                        <b>lowsky/spotify-graphql-server</b>
                    </a>
                    &nbsp; (needs a running local server. See <a href="#localserver">setup</a>!)
                </li>
            </ul>
            <h4 className="is-size-4">How to start the local server</h4>
            <p>
                After installing the dependencies via <code>npm install</code> you also need to configure GitHub
                authentication token in the <code>.env</code> file, then simply run the local graphql server via{' '}
                <code>npm start</code>
            </p>
        </div>
    </div>
);

export default indexPageContent;
