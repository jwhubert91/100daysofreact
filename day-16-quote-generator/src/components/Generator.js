import React, { Component } from 'react';
import Quote from './Quote';
import color from 'randomcolor';

export default class Generator extends Component {
  state = {
    textColor: 'white',
    userSelectedColor: false,
    quoteData: {},
  };

  handleColorSelect = (e) => {
    this.setState({ userSelectedColor: true });
    this.setState({ textColor: e.target.value });
  };

  quoteInit = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => this.setState({ quoteData: data }));
    if (!this.state.userSelectedColor) {
      this.setState({ textColor: color() });
    }
  };

  render() {
    return (
      <div className='generator-container'>
        <Quote
          textColor={this.state.textColor}
          author={this.state.quoteData.author}
          quote={this.state.quoteData.content}
        />
        <div className='button-container'>
          <label htmlFor='color-input'>Text color:</label>
          <input
            type='color'
            name='color-input'
            id='color-input'
            value={this.state.textColor}
            onChange={this.handleColorSelect}
          />
          <button className='generate-button' onClick={this.quoteInit}>
            Generate Quote
          </button>
        </div>
      </div>
    );
  }
}
