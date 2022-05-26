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
          <button onClick={this.onClickSignup}>Sign Up</button>
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
