import React from 'react';
import Search from './components/Search';
import Error from './components/Error';
import Today from './components/Today';
import fetchData from './apis/apis.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      error: '',
      weatherData: {},
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchError() {
    this.setState({
      error:
        'There were no results for that search. Please try another location.',
    });
  }

  async getWeather(locationString) {
    const weatherData = await fetchData(locationString);
    if (!weatherData) {
      // there was an error with the search
      this.handleSearchError();
      return;
    }
    this.setState({ weatherData: weatherData });
  }

  handleSearchChange(e) {
    const { value } = e.target;
    this.setState({
      searchValue: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const search = this.state.searchValue;
    this.getWeather(search);
    this.setState({ searchValue: '' });
  }

  componentDidMount() {
    if (this.state.searchValue === '') {
      this.getWeather('New York');
    }
  }

  render() {
    return (
      <div className='App'>
        <Search
          handleChange={this.handleSearchChange}
          handleSubmit={this.handleSubmit}
          searchValue={this.state.searchValue}
        />
        <Error errorMessage={this.state.error} />
        <Today weatherObj={this.state.weatherData} />
      </div>
    );
  }
}

export default App;
