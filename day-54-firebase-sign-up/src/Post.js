import React from 'react'
import './Post.css'

function Post() {
  return (
    <div className='post'>
      <p className='post__username'>
        <strong>jwhubert91</strong>
        <span></span>
      </p>
      <p className='post__text'>
        This is such a nice place you have here! :)
      </p>
    </div>
  )
}

export default Post
