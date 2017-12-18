import React from 'react';
import { Provider } from 'react-redux';

import App from './app/App';

export default function Root ({ store, ...props }) {
  return (
    <Provider {...{store}}>
      <App />
    </Provider>
  );
}
