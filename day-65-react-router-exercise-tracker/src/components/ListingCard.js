import React from 'react'

function ListingCard({title,date,description,metric,borderColor}) {
  return (
    <div className={`card mt-3 border border-${borderColor}`}>
      <div className='card-body'>
        <h5 className='card-title'><strong>{title}</strong></h5>
        <p className='card-text'>{date}</p>
        <ul>
          <li className='card-text'>{description}</li>
          <li className='card-text'>{metric}</li>
        </ul>
      </div>
    </div>
  )
}

export default ListingCard
