import React from 'react'
import Hero from '../panels/Hero';
import About from '../panels/About';
import ImageCollage from '../components/ImageCollage';
import Menu from '../panels/Menu';
import Locations from '../panels/Locations';
import Footer from '../panels/Footer';
import assetsObject from '../assets';

function Homepage() {
  return (
    <div className='homepage_container'>
      <Hero 
        backgroundImage={assetsObject.heroImage} 
        navIcon={assetsObject.navIcon} 
        socialLinks={assetsObject.socialLinks}
        heroHeaderTitle={assetsObject.heroHeaderTitle}
        heroHeaderSubtitle={assetsObject.heroHeaderSubtitle}
      />
      <About
        aboutMainText={assetsObject.aboutMainText}
        aboutImageData={assetsObject.aboutImage}
        aboutTestimonial={assetsObject.aboutTestimonial}
        aboutTestimonialCitation={assetsObject.aboutTestimonialCitationURL}
      />
      <ImageCollage photoArray={assetsObject.imageCollage1Photos} />
      <Menu
        menuHeaderText={assetsObject.menuHeaderText}
        menuHeaderSubtitle={assetsObject.menuHeaderSubtitle}
        menuColumnsData={assetsObject.menuColumns}
      />
      <ImageCollage photoArray={assetsObject.imageCollage2Photos} />
      <Locations
        locationSectionHeader={assetsObject.locationSectionHeader}
        locationSectionSubheader={assetsObject.locationSectionSubheader}
        locationsData={assetsObject.locations}
      />
      <Footer />
    </div>
  )
}

export default Homepage
