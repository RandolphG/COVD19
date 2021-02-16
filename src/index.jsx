import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Covid19 from './components';

ReactDOM.render(
  <Provider store={store}>
    <Covid19 />
  </Provider>,
  document.getElementById('root')
);
