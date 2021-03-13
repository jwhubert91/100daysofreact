import React from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const LoaderSpinner = () => {
  return (
    <div className='loader-spinner'>
      <Loader 
        type="ThreeDots"
        color="#000000"
        height={100}
        width={100}
      />
      <h1>Fetching Fire Data...</h1>
    </div>
  )
}

export default LoaderSpinner
