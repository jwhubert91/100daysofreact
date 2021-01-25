import React from 'react';
import './HeroText.css';
import storeIcon from '../images/store.png';

function HeroText() {
  const storeIconStyle = {
    height: '1em',
    display: 'inline-block',
    verticalAlign: 'middle',
    paddingBottom: '11px',
  };
  return (
    <div className='hero-text-container row'>
      <div className='col'>
        <div className='hero-text-prompts row mt-4'>
          <h2 className='col text-center'>
            <span className='hero-prompt-first'>Ditch Shipping. </span>
            <span className='hero-prompt-second'>Support Local Stores.</span>
          </h2>
        </div>
        <div className='row'>
          <div className='col'>
            <h1 className='hero-text-main text-center'>
              Shop Compras{' '}
              <i>
                <img src={storeIcon} alt='store icon' style={storeIconStyle} />
              </i>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroText;
