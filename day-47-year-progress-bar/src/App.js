import React from 'react';
import ProgressBar from './ProgressBar';

function App() {

  const today = new Date();
  const newYear = new Date(today.getFullYear(), 11, 31);
  if (today.getMonth() == 11 && today.getDate() > 31) {
    newYear.setFullYear(newYear.getFullYear() + 1)
  }
  const one_day = 1000 * 60 * 60 * 24;
  const remainingDays = Math.ceil((newYear.getTime()-today.getTime())/(one_day));
  const yearCompleted = 365 / (365-remainingDays);
  const readout = (`${remainingDays} days left until 2022!`);

  return (
    <div className="App">
      <h1 className='header-text'>React Year Progress Bar</h1>
      <p>(using native Javascript)</p>
      <p>find me on <a href='https://www.twitter.com/jwhubert91'>the Twitters</a></p>
      <div className='info-container'>
        <div className='readout-container'>{readout}</div>
        <ProgressBar bgcolor={'green'} completed={yearCompleted} />
      </div>
    </div>
  );
}

export default App;
