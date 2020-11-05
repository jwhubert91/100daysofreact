import React from 'react';
import Header from './Header';
import Remembrall from './Remembrall';
import MemoryInput from './MemoryInput';
import Buttons from './Buttons';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dataRemembered: '',
    };
    this.storeMemory = this.storeMemory.bind(this);
    this.clearMemory = this.clearMemory.bind(this);
  }

  storeMemory(userInput) {
    console.log('Memory stored!');
    const memoryObject = {
      timestamp: Date.now(),
      memory: userInput,
    };
    const memoryJSON = JSON.stringify(memoryObject);
    sessionStorage.setItem('memoryData', memoryJSON);
    this.setState({ dataRemembered: memoryObject });
  }

  clearMemory() {
    console.log('Memory cleared!');
    sessionStorage.clear();
    this.setState({ dataRemembered: '' });
  }

  componentDidMount() {
    if (sessionStorage.length > 0) {
      const dataJSON = sessionStorage.getItem('memoryData');
      const dataStr = JSON.parse(dataJSON);
      this.setState({ dataRemembered: dataStr });
    }
  }

  render() {
    const remembrall = (
      <Remembrall dataRemembered={this.state.dataRemembered !== ''} />
    );
    return (
      <div className='App'>
        <Header />
        {remembrall}
        <MemoryInput storeMemory={this.storeMemory} />
        <Buttons clearMemory={this.clearMemory} />
      </div>
    );
  }
}

export default App;
