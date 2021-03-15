import React from 'react'
import InnerTwo from './InnerTwo'

const InnerOne = () => {
  return (
    <div className='innerOne inner-container'>
      Inner One - I have no context
      <InnerTwo />
    </div>
  )
}

export default InnerOne
