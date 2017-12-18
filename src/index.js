import React from 'react';
import { render } from 'react-dom';

import configureStore from './configure-store';
import { INITIAL_STATE } from './initial-state';
import Root from './Root';
import registerServiceWorker from './register-service-worker';

import './index.css';

// Create the store.
const store = configureStore(INITIAL_STATE);

function renderApp(RootComponent) {
  render(
    <RootComponent {...{store}} />,
    document.getElementById('root')
  );
}

renderApp(Root);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextApp = require('./Root').default;

    renderApp(NextApp);
  });
}

registerServiceWorker();
