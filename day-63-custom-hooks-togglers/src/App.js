import React from 'react'
import Navbar from './Navbar'
import useToggler from './useToggler'

function App() {
  const [darkIsOff,toggleDarkIsOff] = useToggler();
  const [isJames,toggleIsJames] = useToggler();
  return (
    <div className={`app ${darkIsOff ? "" : "dark"}`}>
      {/* navbar with title */}
      <Navbar />
      <main className='app__main'>
        {/* dark / light mode toggler */}
        <div className={`app__toggleContainer`}>
          <div className='app__toggleContent'>
            <h2 className='app__togglePrompt'>Toggle Dark Mode</h2>
            <button 
              className='app__toggleButton'
              onClick={toggleDarkIsOff}
            >
              Turn {darkIsOff ? "On" : "Off"}
            </button>
          </div>
        </div>
        {/* name toggler */}
        <div className={`app__toggleContainer`}>
          <div className='app__toggleContent'>
            <h2 className='app__togglePrompt'>{`My name is${isJames ? "" : " not"} James Hubert`}</h2><br />
            <button 
              className='app__toggleButton'
              onClick={toggleIsJames}
            >
              {isJames ? "This is actually not true." : "Wait, no I am James."}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
