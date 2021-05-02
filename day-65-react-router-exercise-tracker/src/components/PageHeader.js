import React from 'react'

function PageHeader({pageTitle,pageIntroText}) {
  return (
    <div>
      <header>
          <h1>{pageTitle}</h1>
          <h5 className='text-center'>{pageIntroText}</h5>
      </header>
    </div>
  )
}

export default PageHeader
