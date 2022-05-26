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

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <div>
          <input
            placeholder="Your display name"
            value={this.state.dipslayName}
            onChange={this.onChangeDisplayname}
          />
        </div>
        <div>
          <input
            placeholder="Your username"
            value={this.state.username}
            onChange={this.onChangeUsername}
          />
        </div>
        <div>
          <input
            placeholder="Your password"
            type="password"
            value={this.state.password}
            onChange={this.onChangePassword}
          />
        </div>
        <div>
          <input
            placeholder="Repeat your password"
            type="password"
            value={this.passwordRepeat}
            onChange={this.onChangePasswordRepeat}
          />
        </div>
        <div>
          <button>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default UserSignupPage;
