import React from 'react';
import './StaticImageInner.css';

function StaticImageInner(props) {
  const innerImageStyle = {
    background: `url(${props.imageUrl})`,
  };
  return (
    <div className='image-grid-container'>
      <div className='home-image-container' style={innerImageStyle}>
        <span className='image-header-text'>{props.imageHeaderText}</span>
      </div>
    </div>
  );
}

export default StaticImageInner;
