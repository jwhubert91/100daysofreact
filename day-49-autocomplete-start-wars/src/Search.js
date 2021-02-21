import React,{useState} from 'react'

function Search() {
  const [query,setQuery] = useState('');
  const [searchResults,setSearchResults] = useState([]);
  const [selectedCharacter,setSelectedCharacter] = useState(null);

  const searchURL = 'https://swapi.dev/api/people/?search=';

  const getInfo = () => {
    console.log('Getting info from API...')
    fetch(searchURL+query)
      .then(res => res.json())
      .then(data => setSearchResults(data.results))
      .catch(e => {
        console.log({error: e});
    });
  }

  const handleInputChange = (e) => {
    setQuery(e.target.value)
    if (query && query.length > 0) {
      getInfo();
    }
  }

  const handleQueryResultClick = (e) => {
    const searchResultId = e.target.id;
    setSelectedCharacter(searchResults[searchResultId]);
    setQuery([]);
  }

  const results = React.Children.toArray(
    searchResults.map((item,idx) => (
      <li className='result-item' id={idx} onClick={handleQueryResultClick}>{item.name}</li>
    ))
  )

  return (
    <form className='search-form-container'>
      <input 
        placeholder='Search for...'
        onChange={handleInputChange}
        value={query}
      />
      <div className='query-results-list'>
        {query.length > 1 && (
          <ul>
            {results}
          </ul>
        )}
      </div>
      <div>
        {selectedCharacter ? (
          <div className='character-display-container'>
            <p><span className='character-info-title'>name:</span> {selectedCharacter.name}</p>
            <p><span className='character-info-title'>height:</span> {selectedCharacter.height}</p>
            <p><span className='character-info-title'>mass:</span> {selectedCharacter.mass}</p>
          </div>
        ) : (
          <p className='no-results-prompt'>There are no results. Try typing something into the search bar above.</p>
        )}
      </div>
    </form>
  )
}

export default Search
