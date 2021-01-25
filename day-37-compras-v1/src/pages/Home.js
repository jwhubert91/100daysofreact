import React from 'react';
import Search from '../components/Search';
import HeroText from '../components/HeroText';
import './Home.css';

function Home() {
  return (
    <div className='homepage-container'>
      <div className='homepage-overlay'>
        <div className='container home-elements-container'>
          <div className='row'>
            <div className='col'>
              <HeroText />
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <Search />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
