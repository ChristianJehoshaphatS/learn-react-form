import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(178, 251, 251);
  border-bottom: solid blue 2px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  border-radius: 15px;
  padding: 5px;
  border-color: rgb(24, 248, 173);
  :hover {
    color: blue;
    cursor: pointer;
    box-shadow: 1px darkblue;
  }
  :focus {
    outline: none;
  }
`;

const InputButton = styled.input`
  border-radius: 15px;
  padding: 5px;
  border-color: rgb(24, 248, 173);
  :hover {
    color: blue;
    cursor: pointer;
    box-shadow: 1px darkblue;
  }
  :focus {
    outline: none;
  }
  :active {
    background-color: white;
    color: blue;
  }
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: 1000;
`;

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li`
  font-weight: 800;
`;

const Remove = styled.input`
  border-radius: 15px;
  padding: 5px;
  color: grey;
  :hover {
    color: red;
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
`;

class Register extends Component {
  constructor() {
    super();

    this.state = {
      latestId: 0,
      emailinput: "",
      password: "",
      emails: []
    };
  }

  handleEmailInput = event => {
    this.setState({ emailinput: event.target.value });
  };
  handlePasswordInput = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const latestId = this.state.latestId;
    const newEmail = {
      id: latestId,
      email: this.state.emailinput,
      password: this.state.password
    };
    const newEmails = this.state.emails.concat(newEmail);

    this.setState({
      emailinput: "",
      password: "",
      latestId: latestId + 1,
      emails: newEmails
    });
  };

  removeEmail = indexToRemove => {
    const newEmails = this.state.emails.filter((email, index) => {
      return index !== indexToRemove;
    });

    this.setState({
      emails: newEmails
    });
  };

  render() {
    const emailsList = this.state.emails.map((email, index) => {
      return (
        <Li key={index}>
          <div>
            <p>Email : {email.email}</p>
            <p>Password : {email.password}</p>
          </div>
          <Remove
            type="button"
            value="Remove"
            onClick={() => this.removeEmail(index)}
          />
        </Li>
      );
    });

    return (
      <Container>
        <h1>Register</h1>
        <Form onSubmit={this.handleSubmit}>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            onChange={this.handleEmailInput}
            value={this.state.emailinput}
          />
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            onChange={this.handlePasswordInput}
            value={this.state.password}
          />
          <InputButton type="submit" />
        </Form>
        <Ul>{emailsList}</Ul>
      </Container>
    );
  }
}

export default Register;
