import React, { Component } from 'react';

export default class MemoryInput extends Component {
  constructor() {
    super();
    this.state = {
      memoryText: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ memoryText: e.target.value });
  }

  handleSubmit(userInput) {
    this.props.storeMemory(userInput);
    this.setState({ memoryText: '' });
  }

  render() {
    const userInput = this.state.memoryText;
    return (
      <div className='memory-input-container'>
        <input
          placeholder='Type something here...'
          value={this.state.memoryText}
          onChange={this.handleChange}
        />
        <button onClick={() => this.handleSubmit(userInput)}>
          Store Memory
        </button>
      </div>
    );
  }
}
