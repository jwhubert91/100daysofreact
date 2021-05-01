import React from 'react'
import PageInner from '../components/PageInner'

function About() {
  return (
    <div>
      <PageInner 
        title='About'
        quote='All the info about the site lives here.'
        author='Marcus Aurelius'
        book='Meditations'
      />
    </div>
  )
}

export default About
