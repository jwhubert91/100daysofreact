import React from 'react'
import ResponsiveCTAs from '../components/ResponsiveCTAs';
import './styles/Hero.css';

function Hero(props) {
  const heroBackground = props.backgroundImage ? props.backgroundImage : '';
  
  const socialButtons = props.socialLinks.map(obj => (
      <a href={obj.url} alt={obj.title} key={obj.title} className='hero-social-link'>
        <i className={obj.iconClass} />
      </a>
    )
  );

  const panelStyle = {
    backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.3), 
      rgba(0, 0, 0, 0.8)
    ), url(${heroBackground})`,
  }

  return (
    <header className='full-height hero' style={panelStyle}>
      <div className='hero-nav-decoration'>
        <div className='hero-nav-col'>
        </div>
        <div className='hero-nav-center-icon'>
          <span>{props.navIcon}</span>
        </div>
        <div className='hero-nav-col'>
        </div>
      </div>
      <div className='social-buttons'>

        {socialButtons}
      </div>
      <div className='hero-header-container' id='hero-header-container'>
        <h2 className='hero-header-subtitle'>{props.heroHeaderSubtitle}</h2>
        <h1 className='hero-header-title'>{props.heroHeaderTitle}</h1>
      </div>
      <div className='hero-bottom-container'>
        <ResponsiveCTAs />
        <div className='hero-arrow-container'>
          <a href='#About' alt='See more'>
            <i className='fa fa-arrow-down' />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Hero;
