import React from 'react';
import Navbar from './Navbar';
import PageContainer from './PageContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activePage: 3,
    };
    this.handlePageSelect = this.handlePageSelect.bind(this);
  }

  handlePageSelect(e) {
    const selectedPageId = e.target.getAttribute('item');
    this.setState({
      activePage: Number(selectedPageId),
    });
  }

  render() {
    return (
      <div className='App'>
        <Navbar
          handleSelect={this.handlePageSelect}
          activePage={this.state.activePage}
        />
        <PageContainer activePage={this.state.activePage} />
      </div>
    );
  }
}

export default App;
