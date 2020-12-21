import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Hero.css';
import fan1 from '../images/office-fan.jpg';
import fan2 from '../images/kitchen-fan.jpeg';
import fan3 from '../images/industrial-fan.jpg';
import fan4 from '../images/modern-fan.jpg';

const carouselImages = [
  {
    title: 'office-fan',
    img: fan1,
  },
  {
    title: 'kitchen-fan',
    img: fan2,
  },
  {
    title: 'industrial-fan',
    img: fan3,
  },
  {
    title: 'modern-fan',
    img: fan4,
  },
];

function Hero() {
  const [heroImageIdx, setHeroImageIdx] = useState(0);

  const runCarousel = () => {
    const interval = setInterval(() => {
      setHeroImageIdx((prevIdx) => prevIdx + 1);
    }, 5000);
    return () => clearInterval(interval);
  };

  useEffect(() => {
    runCarousel();
  }, []);

  return (
    <div className='carousel'>
      <img
        src={carouselImages[heroImageIdx % 4].img}
        alt={carouselImages[heroImageIdx % 4].title}
        className='hero-image'
      />
      <Navbar />
    </div>
  );
}

export default Hero;
