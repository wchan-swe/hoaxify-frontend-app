import React from 'react';

export class UserSignupPage extends React.Component {
  state = {
    dipslayName: '',
    username: '',
    password: '',
    passwordRepeat: '',
  };

  onChangeDisplayname = (event) => {
    const value = event.target.value;
    this.setState({
      dipslayName: value,
    });
  };

  onChangeUsername = (event) => {
    const value = event.target.value;
    this.setState({
      username: value,
    });
  };

  onChangePassword = (event) => {
    const value = event.target.value;
    this.setState({
      password: value,
    });
  };

  onChangePasswordRepeat = (event) => {
    const value = event.target.value;
    this.setState({
      passwordRepeat: value,
    });
  };

  onClickSignup = () => {
    const user = {
      username: this.state.username,
      displayName: this.state.dipslayName,
      password: this.state.password,
    };
    this.props.actions.postSignup(user);
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Sign Up</h1>
        <div className="col-12 mb-3">
          <label>Display Name</label>
          <input
            className="form-control"
            placeholder="Your display name"
            value={this.state.dipslayName}
            onChange={this.onChangeDisplayname}
          />
        </div>
        <div className="col-12 mb-3">
          <label>Your username</label>
          <input
            className="form-control"
            placeholder="Your username"
            value={this.state.username}
            onChange={this.onChangeUsername}
          />
        </div>
        <div className="col-12 mb-3">
          <label>Your password</label>
          <input
            className="form-control"
            placeholder="Your password"
            type="password"
            value={this.state.password}
            onChange={this.onChangePassword}
          />
        </div>
        <div className="col-12 mb-3">
          <label>Repeat your password</label>
          <input
            className="form-control"
            placeholder="Repeat your password"
            type="password"
            value={this.passwordRepeat}
            onChange={this.onChangePasswordRepeat}
          />
        </div>
        <div className="text-center">
          <button className="btn btn-primary" onClick={this.onClickSignup}>
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}

UserSignupPage.defaultProps = {
  actions: {
    postSignup: () =>
      new Promise((resolve, reject) => {
        resolve({});
      }),
  },
};

export default UserSignupPage;
