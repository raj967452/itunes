import React from 'react';
import ReactDOM from 'react-dom';
//import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import Store, { history } from './services/store/Store';
import App from './App';

import './index.scss';

const root = document.querySelector('#root')

ReactDOM.render(
  <Provider store={Store}>
    <Router history={history}>
      <div>
        <App />
      </div>
    </Router>
  </Provider>, root
);
