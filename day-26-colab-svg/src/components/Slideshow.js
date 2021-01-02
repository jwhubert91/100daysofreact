import React from 'react';
import { Fade } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';
import './Slideshow.css';

const fadeImages = [
  'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
  'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
];

const Slideshow = () => {
  return (
    <div className='slide-container'>
      <Fade>
        <div className='each-fade'>
          <div className='image-container'>
            <img src={fadeImages[0]} alt={'image1'} />
          </div>
          {/* <h2>First Slide</h2> */}
        </div>
        <div className='each-fade'>
          <div className='image-container'>
            <img src={fadeImages[1]} alt={'image2'} />
          </div>
          {/* <h2>Second Slide</h2> */}
        </div>
        <div className='each-fade'>
          <div className='image-container'>
            <img src={fadeImages[2]} alt={'image3'} />
          </div>
          {/* <h2>Third Slide</h2> */}
        </div>
      </Fade>
    </div>
  );
};

export default Slideshow;
