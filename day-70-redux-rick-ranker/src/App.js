import React from 'react'
import Contol from './components/Contol'
import Navbar from './components/Navbar'
import TitleEdit from './components/TitleEdit'
import Video from './components/Video'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className='container'>
        <div className='row text-center pt-2'>
          <TitleEdit />
        </div>
        <div className='row text-center'>
          <div className="col">
            <Video />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <Contol />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
