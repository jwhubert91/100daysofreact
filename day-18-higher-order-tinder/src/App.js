import React from 'react';
import TinderApp from './TinderInfo';

function App() {
  return (
    <div className='App'>
      <nav className='navbar text-center'>
        <span className='navbar-brand'>
          <i className='fa fa-fire'></i> High Order Tinder
        </span>
      </nav>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <TinderApp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
