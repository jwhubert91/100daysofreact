import React from 'react';
import StaticImageInner from './StaticImageInner';
import phoebeComingSoon from '../images/phoebelipsyncga.jpeg';
import ProductSlidesGridElement from './ProductSlidesGridElement';
import productImages from '../productImages';

function HomeGrid() {
  return (
    <div className='home-grid-container'>
      <div className='home-grid-header'>
        <h2 className='home-grid-title-header'>Nuestro Catálogo en Linea</h2>
        <p className='home-grid-header-subtitle'>
          Para órdenes y preguntas oprime el botón de abajo.
        </p>
      </div>
      <ProductSlidesGridElement
        passedImages={productImages['neonGreen']}
        productName={'Neon Green Cosplay'}
        titleFont={'Toxia'}
        titleFontSize={'2.7em'}
        productPrice={'$999 MX'}
      />
      <ProductSlidesGridElement
        passedImages={productImages['silver']}
        productName={'Platinum Moon'}
        titleFont={'MoonHand'}
        titleFontSize={'1.25em'}
        productPrice={'$999 MX'}
      />
      <ProductSlidesGridElement
        passedImages={productImages['red']}
        productName={'Candy Pink Cosplay'}
        titleFont={'CandyCake'}
        titleFontSize={'2.5em'}
        productPrice={'$999 MX'}
      />
      <StaticImageInner
        imageUrl={phoebeComingSoon}
        imageHeaderText={'Más de Dollhouse Proximamente...'}
        font={'SelfDeceptionCursive'}
        fontSize={'90px'}
      />
    </div>
  );
}

export default HomeGrid;
