import React from 'react'
import assetsObject from '../assets';
import './styles/ResponsiveCTAs.css';

function ResponsiveCTAs() {

  const {responsiveCTAs} = assetsObject;

  const responsiveCTAList = responsiveCTAs.map(cta => (
    <a href={cta.url} key={cta.provider} className='cta-button'>
      <img src={cta.image} alt={cta.provider} />
    </a>
  ))

  return (
    <div className='responsive-ctas-container'>
      {responsiveCTAList}
    </div>
  )
}

export default ResponsiveCTAs
