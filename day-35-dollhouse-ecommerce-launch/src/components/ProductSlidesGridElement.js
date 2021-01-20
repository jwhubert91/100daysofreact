import React from 'react';
import { Slide } from 'react-slideshow-image';
import './ProductSlidesGridElement.css';

function ProductSlidesGridElement(props) {
  const imagesArray = props.passedImages;
  const { titleFont, titleFontSize } = props;

  const productTitleStyle = props.titleFontSize
    ? {
        fontFamily: titleFont,
        fontSize: titleFontSize,
      }
    : { fontFamily: titleFont };

  return (
    <div className='product-slideshow-container'>
      <Slide easing='ease' autoplay={false}>
        {imagesArray.map((image, idx) => (
          <div key={idx} className='each-slide'>
            <div style={{ backgroundImage: `url(${imagesArray[idx]})` }}></div>
            <span className='product-title' style={productTitleStyle}>
              {props.productName}
            </span>
            <span className='product-price'>{props.productPrice}</span>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default ProductSlidesGridElement;
