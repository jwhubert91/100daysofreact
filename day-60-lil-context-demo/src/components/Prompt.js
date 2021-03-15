import React from 'react'

const Prompt = ({handleNameChange}) => {

  return (
    <div className='prompt'>
      <h1>Hello there!</h1>
      <h4>Please enter your name:</h4>
      <input
        type='text'
        placeholder='e.g. Jeffrey'
        onChange={e => handleNameChange(e)}
        className='prompt__input'
      />
    </div>
  )
}

export default Prompt
