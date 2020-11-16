import React from 'react';

function Search(props) {
  return (
    <div className='search-container'>
      <div className='search'>
        <form className='search-form' onSubmit={props.handleSubmit}>
          <input
            type='text'
            name='searchValue'
            className='search-input'
            placeholder='Enter a City...'
            onChange={props.handleChange}
            value={props.searchValue}
          />
        </form>
      </div>
    </div>
  );
}

export default Search;
