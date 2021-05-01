import React from 'react'
import PageInner from '../components/PageInner'

function Home() {
  return (
    <div className='mt-4'>
      <PageInner 
        title='Home'
        quote='This is the home page, where all the magic happens.'
        author='Marcus Aurelius'
        book='Meditations'
      />
    </div>
  )
}

export default Home
