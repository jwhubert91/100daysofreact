import { Component } from 'react';
import Hi from './day-1-components/Hi';
import Header from './Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePage: 'day-1',
    };
    this.showPage = this.showPage.bind(this);
  }

  showPage() {
    if (this.state.activePage === 'day-1') {
      return <Hi name='day-1' />;
    }
    // else if (this.state == 'day-2') {
    // 	return ()
    // }
  }

  render() {
    return (
      <div className='App'>
        <Header />
        {this.showPage()}
      </div>
    );
  }
}

export default App;
