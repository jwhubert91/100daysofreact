import React from 'react';
import ImageInner from './ImageInner';
import neonGreen1 from '../images/IMG_8655.jpg';
import candyPink1 from '../images/IMG_9234.jpg';
import platinumMoon1 from '../images/IMG_8730.jpg';
import phoebeComingSoon from '../images/phoebelipsyncga.jpeg';

function HomeGrid() {
  return (
    <div className='home-grid-container'>
      <ImageInner
        imageUrl={neonGreen1}
        imageHeaderText={'Neon Green Cosplay'}
        font={'Toxia'}
        fontSize='60px'
      />
      <ImageInner
        imageUrl={candyPink1}
        imageHeaderText={'Candy Pink Cosplay'}
        font={'CandyCake'}
      />
      <ImageInner
        imageUrl={platinumMoon1}
        imageHeaderText={'Platinum Moon'}
        font={'MoonHand'}
        fontSize={'40px'}
      />
      <ImageInner
        imageUrl={phoebeComingSoon}
        imageHeaderText={'Más de Dollhouse Proximamente...'}
        font={'SelfDeceptionCursive'}
        fontSize={'90px'}
      />
    </div>
  );
}

export default HomeGrid;
