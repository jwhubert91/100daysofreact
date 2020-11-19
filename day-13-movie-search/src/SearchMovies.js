import React, { useState } from 'react';
import MovieCard from './MovieCard';
import { apiKey } from './config';

export default function SearchMovies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <form className='form' onSubmit={searchMovies}>
        <label htmlFor='query' className='label'>
          Movie Name:
        </label>
        <input
          className='input'
          type='text'
          name='query'
          placeholder='e.g. Uncut Gems...'
          value={query}
          onChange={handleChange}
        />
        <button type='submit' className='button'>
          Search
        </button>
      </form>
      <div className='card-list'>
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
      </div>
    </>
  );
}
