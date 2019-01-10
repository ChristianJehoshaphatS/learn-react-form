import React, { Component } from "react";
import Register from "./Register";
import TodoApp from "./TodoApp";
import styled from "styled-components";

const Title = styled.h1`
  color: blue;
  background-color: rgb(178, 251, 251);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  background-color: rgb(178, 251, 251);
  border: solid blue 2px;
  border-radius: 50px;
  margin-top: 20px;
  margin-left: 20px;
  padding: 30px;
`;

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Title>Learn React Forms</Title>
        <Register />
        <TodoApp />
      </Container>
    );
  }
}

export default App;
