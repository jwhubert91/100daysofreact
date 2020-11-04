import React, { Component } from 'react';

export default class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let newTodos;
    const newTodoObject = {
      id: todosData.length + 1,
      completed: false,
      todo: this.state.newTodo,
    };
    if (window.sessionStorage.length > 0) {
      let todosData = JSON.parse(window.sessionStorage.getItem('todosData'));
      newTodos = JSON.stringify([...todosData, newTodoObject]);
    } else {
      newTodos = JSON.stringify([newTodoObject]);
    }
    window.sessionStorage.setItem('todosData', newTodos);
    this.setState({ newTodo: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-row'>
          <div className='col-sm-9'>
            <input
              type='text'
              className='form-control form-control-lg'
              onChange={this.handleChange}
              placeholder='e.g. Take out the trash...'
              value={this.state.newTodo}
              name='newTodo'
            />
          </div>
          <div className='col-sm-3'>
            <button className='btn btn-lg btn-primary btn-block'>Add</button>
          </div>
        </div>
      </form>
    );
  }
}
