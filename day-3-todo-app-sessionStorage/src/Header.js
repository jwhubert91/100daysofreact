import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1 className='mt-3'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft_To-Do_icon.png'
            width='40px'
          />
          &nbsp; React Todo List
        </h1>
        <p>
          by &nbsp;
          <a href='https://dev.to/jwhubert91'>James Hubert</a>
          &nbsp;:)
        </p>
      </div>
    );
  }
}
