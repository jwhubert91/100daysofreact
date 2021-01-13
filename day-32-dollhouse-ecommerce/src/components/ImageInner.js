import React from 'react';
import './ImageInner.css';

function ImageInner(props) {
  const { imageUrl, font } = props;

  const imageStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  const imageHeaderStyle = props.fontSize
    ? {
        fontFamily: font,
        fontSize: props.fontSize,
      }
    : { fontFamily: font };

  return (
    <div className='home-image-container' style={imageStyle}>
      <span className='image-header-text' style={imageHeaderStyle}>
        {props.imageHeaderText}
      </span>
      <span className='image-subtext'>{props.imageSubtext}</span>
    </div>
  );
}

export default ImageInner;
