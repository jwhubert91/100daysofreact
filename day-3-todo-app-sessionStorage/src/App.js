import React from 'react';
import Header from './Header.js';
import AddTodo from './AddTodo.js';
import Todos from './Todos.js';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='app-container text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <Header />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-8 offset-md-2'>
              <AddTodo />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-10 offset-md-1'>
              <Todos />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
