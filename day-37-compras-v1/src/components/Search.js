import React, { useState } from 'react';
import fetchProductsData from '../apis/fetchProductsData';

function Search() {
  const [productSearch, setProductSearch] = useState('');
  const [zip, setZip] = useState('');
  const [productMatches, setProductMatches] = useState([]);
  const [error, setError] = useState('');

  const handleSearchError = () => {
    setError(
      'There were no results for that search. Please try another location.'
    );
    console.error(error);
  };

  const getProducts = async (zip, productSearch) => {
    const productsData = await fetchProductsData(zip, productSearch);
    if (!productsData) {
      // there was an error with the search
      handleSearchError();
      return;
    }
    setProductMatches(productsData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getProducts(zip, productSearch);
  };

  return (
    <div className='search-box card'>
      <div className='card-body'>
        <form className='form-inline' onSubmit={handleSubmit}>
          <div className='col-md-6 col-12 mt-3'>
            <input
              type='text'
              name='productSearch'
              className='form-control w-100'
              placeholder='Search Products'
              value={productSearch}
              onChange={(e) => setProductSearch(e.currentTarget.value)}
            />
          </div>
          <div className='col-md-4 col-12 mt-3'>
            <input
              type='number'
              name='zipCode'
              className='form-control w-100'
              placeholder='Zip Code'
              value={zip}
              onChange={(e) => setZip(e.currentTarget.value)}
              maxLength='5'
            />
          </div>
          <div className='col-md-2 col-12 mt-3'>
            <button className='btn btn-primary btn-block'>Search</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
