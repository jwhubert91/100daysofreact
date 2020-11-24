import React from 'react';
import Header from './Header';
import Generator from './Generator';

function QuoteGenerator() {
  return (
    <div className='quote-generator-container'>
      <Header />
      <Generator />
    </div>
  );
}

export default QuoteGenerator;
