import React from 'react'
import {useLocation} from 'react-router-dom'

function PageInner({title,quote,author,book}) {
  return (
    <div className='mt-4'>
      <h1>{title}</h1>
      <p className="text-warning">path: {useLocation().pathname}</p>
      <blockquote className="blockquote text-center">
        <p className="mb-0">{quote}</p>
        <footer className="blockquote-footer">{author} <cite title="Source Title">{book}</cite></footer>
      </blockquote>
    </div>
  )
}

export default PageInner
