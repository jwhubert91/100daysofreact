import React, { Component } from 'react';
import NoTodosText from './NoTodosText';

export default class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    if (window.sessionStorage.length > 0) {
      const todosData = JSON.parse(window.sessionStorage.todosData);
      this.setState({
        todos: todosData,
      });
    }
  }

  render() {
    return (
      <div className='card mt-4'>
        <div className='card-body'>
          <div className='card-text'></div>
        </div>
      </div>
    );
  }
}
