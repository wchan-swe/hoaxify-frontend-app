import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './containers/App';
import * as apiCalls from './api/apiCalls';

// for demo purposes
const actions = {
  postLogin: apiCalls.login,
};

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
