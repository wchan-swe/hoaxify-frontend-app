import React, { Component } from 'react';
import { connect } from 'react-redux';
import ButtonWithProgress from '../components/ButtonWithProgress';
import Input from '../components/Input';

export class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    apiError: undefined,
    pendingApiCall: false,
  };

  onChangeUsername = (event) => {
    const value = event.target.value;
    this.setState({
      username: value,
      apiError: undefined,
    });
  };

  onChangePassword = (event) => {
    const value = event.target.value;
    this.setState({
      password: value,
      apiError: undefined,
    });
  };

  onClickLogin = () => {
    const body = {
      username: this.state.username,
      password: this.state.password,
    };
    this.setState({ pendingApiCall: true });
    this.props.actions
      .postLogin(body)
      .then((response) => {
        // dispatch action to change the redux state
        // reducers will be called
        const action = {
          type: 'login-success',
          payload: {
            //   id: response.data.id,
            //   username: response.data.username,
            //   displayName: response.data.displayName,
            //   image: response.data.image,
            ...response.data,
            password: this.state.password,
          },
        };
        this.props.dispatch(action);
        this.setState({ pendingApiCall: false }, () => {
          this.props.history.push('/');
        });
      })
      .catch((error) => {
        if (error.response) {
          this.setState({
            apiError: error.response.data.message,
            pendingApiCall: false,
          });
        }
      });
  };

  render() {
    let disableSubmit = false;
    if (this.state.username === '') {
      disableSubmit = true;
    }
    if (this.state.password === '') {
      disableSubmit = true;
    }

    return (
      <div className="container">
        <h1 className="text-center">Login</h1>
        <div className="col-12 mb-3">
          <Input
            label="Username"
            placeholder="Your username"
            value={this.state.username}
            onChange={this.onChangeUsername}
          />
        </div>
        <div className="col-12 mb-3">
          <Input
            label="Password"
            placeholder="Your password"
            type="password"
            value={this.state.password}
            onChange={this.onChangePassword}
          />
        </div>
        {this.state.apiError && (
          <div className="col-12 mb-3">
            <div className="alert alert-danger">{this.state.apiError}</div>
          </div>
        )}
        <div className="text-center">
          <ButtonWithProgress
            onClick={this.onClickLogin}
            disabled={disableSubmit || this.state.pendingApiCall}
            text="Login"
            pendingApiCall={this.state.pendingApiCall}
          />
        </div>
      </div>
    );
  }
}

LoginPage.defaultProps = {
  actions: {
    postLogin: () => new Promise((resolve, reject) => resolve({})),
  },
  dispatch: () => {},
};

export default connect()(LoginPage);
