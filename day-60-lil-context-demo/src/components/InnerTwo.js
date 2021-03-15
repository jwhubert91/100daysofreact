import React from 'react'
import InnerThree from './InnerThree'

const InnerTwo = () => {
  return (
    <div className='innerTwo inner-container'>
      Inner two - I have no context
      <InnerThree />
    </div>
  )
}

export default InnerTwo
