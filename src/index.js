import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import App from './containers/App';
import authReducer from './redux/authReducer';
import logger from 'redux-logger';

const loggedInState = {
  id: 1,
  username: 'user1',
  displayName: 'display1',
  image: 'profile.png',
  password: 'P4ssword',
  isLoggedIn: true,
};

const store = createStore(authReducer, loggedInState, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
