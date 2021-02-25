import React from 'react';
import Pomodoro from './components/Pomodoro';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Popovic Pomodoro</h1>
        <h3 className='header-subtext'>
          by <a href='https://www.twitter.com/jwhubert91'>@jwhubert91</a><br />
          courtesy <a href='https://dev.to/alekswritescode/infinite-pomodoro-app-in-react-52jj'>Aleks Popovic</a>
        </h3>
      </header>
      <Pomodoro />
    </div>
  );
}

export default App;
