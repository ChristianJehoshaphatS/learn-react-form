import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border-bottom: solid blue 2px;
  border-right: solid blue 2px;
  border-left: solid blue 2px;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TodoInput = styled.input`
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-right: none;
  padding: 5px;
  border-color: rgb(24, 248, 173);
  background-color: rgba(255, 255, 255, 0.5);
  :hover {
    color: blue;
    cursor: pointer;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }
  :focus {
    outline: none;
  }
`;

const Input = styled.input`
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 5px;
  border-color: rgb(24, 248, 173);
  border-left: none;
  background-color: rgba(255, 255, 255, 0.3);
  :hover {
    color: blue;
    cursor: pointer;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
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
