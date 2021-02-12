import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';
import store from './store/store';
import { Covid19 } from './components';
import { AnimatePresence } from 'framer-motion';
ReactDOM.render(
  <Provider store={store}>
    <AnimatePresence exitBeforeEnter>
      <Router>
        <Covid19 />
      </Router>
    </AnimatePresence>
  </Provider>,
  document.getElementById('root')
);
