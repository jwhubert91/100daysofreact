import React from 'react';
import SearchMovies from './SearchMovies';

class Main extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1 className='title'>React Movie Search</h1>
        <SearchMovies />
      </div>
    );
  }
}

export default Main;
