import React, { useState,useEffect } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function App() {
  const [editorBody,setEditorBody] = useState('')
  const [storedSaveTime,setStoredSaveTime] = useState('')

  function save() {
    localStorage.setItem('editorSave',editorBody)
    const currentTime = new Date().toUTCString();
    localStorage.setItem('savedDateTime', currentTime)
  }

  function getTwelveHourFormat(hours) {
    if (hours === 0) {
      return 12
    } else if (hours > 12) {
      return hours - 12
    } else {
      return hours
    }
  }

  async function getSavedTime() {
    const parsedDate = await localStorage.getItem('savedDateTime').toLocaleString()
    const savedDate = new Date(parsedDate)
    const savedHours = savedDate.getHours()
    const localMeridian = savedHours < 12 ? "AM" : "PM"
    const adjustedHours = getTwelveHourFormat(savedHours) 
    const localTimeString = (savedDate.getMonth()+1 + "/"
    + savedDate.getDate() + "/" 
    + savedDate.getFullYear() + " at "  
    + adjustedHours + ":"  
    + savedDate.getMinutes() + " " 
    + localMeridian + ".")
    return await localTimeString
  }

  function load() {
    const storedData = localStorage.getItem('editorSave')
    if (storedData) {
      setEditorBody(storedData)
      // parseSavedTime(parsedDate)
      getSavedTime()
        .then(dateText => setStoredSaveTime(dateText))
        .catch(error => console.log(error))
    }
  }

  window.addEventListener("unload", () => {
    save()
  })

  // effects on window load and window close
  useEffect(() => {
    load()
  }, [])

  const lastSave = storedSaveTime && (<strong>Last note saved {storedSaveTime}</strong>)

  return (
    <div className="app">
      <header>
        <div className='header__hero'>
          <h1>React Local Notes</h1>
          <h2>by <a href='https://twitter.com/jwhubert91'>@jwhubert91</a></h2>
        </div>
        <p>{lastSave} The note will save automatically when the window closes.</p>
      </header>
      <main>
        <ReactQuill theme="snow" value={editorBody} onChange={setEditorBody} />
      </main>
    </div>
  );
}

export default App;
