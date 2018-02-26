import React from 'react';
import ReactDOM from 'react-dom';

import routes from './routes';

import { AppContainer } from 'react-hot-loader';

const rootElement = document.getElementById('root');

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
        render(routes);
    });
}
