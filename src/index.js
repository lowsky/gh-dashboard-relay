import React from 'react';
import ReactDOM from 'react-dom';

let routes = require('./routes').default;

const rootElement = document.getElementById('root');

import { AppContainer } from 'react-hot-loader';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        rootElement
    );
};
render(routes);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./routes', () => {
        routes = require('./routes').default;
        render(routes);
    });
}
