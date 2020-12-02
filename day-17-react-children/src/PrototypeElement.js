import React from 'react';
import catImage from './cat-image.jpg';

function PrototypeElement(props) {
  const { shape } = props;
  const elStyle = {
    borderRadius: shape.protoShape === 'circle' ? '50%' : '0',
    backgroundColor: shape.backgroundColor,
    height: shape.protoShape === 'rectangle' ? '150px' : '200px',
  };
  const catEl = <img src={catImage} alt='cat' width='80px' />;
  return (
    <div className='prototype-element' style={elStyle}>
      <p>
        <strong>{shape.headerText}</strong>
      </p>
      <p>{shape.innerText}</p>
      {shape.catPic && catEl}
    </div>
  );
}

export default PrototypeElement;
