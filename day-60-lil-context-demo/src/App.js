import React,{useState} from 'react'
import Prompt from './components/Prompt'
import InnerOne from './components/InnerOne'
import NameContext from './nameContext'

function App() {
  const [name,setName] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div className="app">
      <Prompt handleNameChange={handleNameChange} />
      <NameContext.Provider value={name}>
        <InnerOne />
      </NameContext.Provider>
    </div>
  );
}

export default App;
