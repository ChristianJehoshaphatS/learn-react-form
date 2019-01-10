import React, { Component } from "react";
import Register from "./Register";
import TodoApp from "./TodoApp";
import styled from "styled-components";

const Title = styled.h1`
  color: blue;
  background-color: rgb(178, 251, 251);
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title>Learn React Forms</Title>
        <Register />
        <TodoApp />
      </div>
    );
  }
}

export default App;
