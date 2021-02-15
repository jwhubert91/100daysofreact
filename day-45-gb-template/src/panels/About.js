import React from 'react'
import './styles/About.css';

function About(props) {
  const {url,altText} = props.aboutImageData;
  return (
    <div className='full-height about-panel' id='About'>
      <div className='about-top-row'>
        <div className='about-text'>
          <p>
            {props.aboutMainText}
          </p>
        </div>
        <div className='about-image'>
          <img src={url} className='about-image' alt={altText} />
        </div>
      </div>
      <div className='testimonial'>
        <span className='testimonial-text'>
          "{props.aboutTestimonial}"
          <br />
          <span className='testimonial-citation'>https://www.bluecorona.com/blog/do-i-need-a-website/</span>
        </span>
      </div>
    </div>
  )
}

export default About
