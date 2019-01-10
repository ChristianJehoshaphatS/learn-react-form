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
  flex-direction: row;
  align-items: center;
`;

const TodoInput = styled.input`
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 5px;
  border-color: rgb(24, 248, 173);
  :focus {
    outline: none;
  }
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
  :active {
    background-color: white;
    color: blue;
  }
`;

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li`
  font-weight: 800;
  padding: 10px;
  font-size: 20px;
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

class TodoApp extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      latestId: 0,
      todos: []
    };
  }

  handleTodoInput = event => {
    this.setState({ input: event.target.value });
  };

  handleTodoSubmit = event => {
    event.preventDefault();

    const latestId = this.state.latestId;
    const newTodo = {
      id: latestId,
      text: this.state.input
    };
    const newTodos = this.state.todos.concat(newTodo);

    this.setState({
      input: "",
      latestId: latestId + 1,
      todos: newTodos
    });
  };

  removeTodo = indexToRemove => {
    const newTodos = this.state.todos.filter((todo, index) => {
      return index !== indexToRemove;
    });

    this.setState({
      todos: newTodos
    });
  };

  render() {
    const todoList = this.state.todos.map((todo, index) => {
      return (
        <Li key={index}>
          {todo.text}{" "}
          <Remove
            type="button"
            value="Remove"
            onClick={() => this.removeTodo(index)}
          />
        </Li>
      );
    });

    return (
      <Container>
        <h1>TODO APP</h1>
        <Form onSubmit={this.handleTodoSubmit}>
          <TodoInput
            type="text"
            placeholder="What do you want to do?"
            onChange={this.handleTodoInput}
            value={this.state.input}
          />
          <Input type="submit" value="Add Todo" />
        </Form>
        <Ul>{todoList}</Ul>
      </Container>
    );
  }
}

export default TodoApp;
