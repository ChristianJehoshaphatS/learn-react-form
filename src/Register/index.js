import React, { Component } from "react";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleEmailInput = event => {
    this.setState({ email: event.target.value });
  };
  handlePasswordInput = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>Register</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" onChange={this.handleEmailInput} />
          <input type="password" onChange={this.handlePasswordInput} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Register;
