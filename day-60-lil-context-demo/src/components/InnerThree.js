import React from 'react'
import NameContext from '../nameContext'

const InnerThree = () => {
  return (
    <NameContext.Consumer>
      {(name) => (
        <div className='innerThree inner-container'>
          Inner three - Do I have some context? 🤔 
          <div className='innerThree__nameText'>{name}</div>
        </div>
      )}
    </NameContext.Consumer>
  )
}

export default InnerThree
