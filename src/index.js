import React from 'react';
import ReactDOM from 'react-dom';
import UserSignupPage from './pages/UserSignupPage';
import { LoginPage } from './pages/LoginPage';
import * as apiCalls from './api/apiCalls';

// for demo purposes
const actions = {
  postLogin: apiCalls.login,
};

// ReactDOM.render(
//   <UserSignupPage actions={actions} />,
//   document.getElementById('root')
// );

ReactDOM.render(
  <LoginPage actions={actions} />,
  document.getElementById('root')
);
