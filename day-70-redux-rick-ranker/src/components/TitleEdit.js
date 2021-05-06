import React,{useState} from 'react'
import {store,rename} from '../redux'

function TitleEdit() {
  const [isEditing,setIsEditing] = useState(false)
  const [currentName,setCurrentName] = useState("Never Gonna Give You Up")

  store.subscribe(() => {
    const storeObject = store.getState()
    setCurrentName(storeObject.name)
  })

  const handleRename = () => {
    store.dispatch(rename(currentName))
  }

  function handleEditClick() {
    isEditing && (
      // was editing, now save and go back to normal
      handleRename()
    )
    setIsEditing(prevState => !prevState)
  }

  return (
    <div className='col'>
      <h1>
        {isEditing ? 
          <div className='col-sm-6 offset-sm-3'>
            <input 
              type="text" 
              placeholder="Enter new title"
              value={currentName}
              className="form-control"
              onChange={e => setCurrentName(e.currentTarget.value)}
            ></input>
          </div> :
         <span>{currentName}{' '}</span>
        }
      <button 
        onClick={handleEditClick} 
        className="btn btn-light btn-sm"
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      </h1>
    </div>
  )
}

export default TitleEdit
