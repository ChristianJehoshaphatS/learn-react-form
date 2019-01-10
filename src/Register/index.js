import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(178, 251, 251);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  border-radius: 10px;
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: 1000;
`;

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
      <Container>
        <h1>Register</h1>
        <Form onSubmit>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" onChange={this.handleEmailInput} />
          <Label htmlFor="password">Password:</Label>
          <Input type="password" onChange={this.handlePasswordInput} />
          <Input type="submit" />
        </Form>
      </Container>
    );
  }
}

export default Register;
