import React from 'react'
import unsplashProduce from '../images/alexander-schimmeck-unsplash.jpg';
import './BusinessProfilePage.css';
import grubhubButton from  '../images/grubhub-button.png';
import postmatesButton from '../images/PM_Get Delivery_black@3x.png';
import ubereatsButton from '../images/ubereats-button.png';

function BusinessProfilePage() {
  return (
    <div className='page-container container'>
      <div className='business-profile-top'>
        <div className='business-profile-image-container row'>
          <img src={unsplashProduce} className='biz-profile-image' />
        </div>
        <div className='business-profile-info'>
          <div className='row'>
            <div className='col'>
            <h1 className='business-profile-name'>PCC Natural Markets</h1>
            <h4 className='business-profile-additional-identifier'>
              Magnolia
            </h4>
            <div className='business-profile-additional-info'>
              <div className='business-profile-address'>
                <span className='business-profile-address-line-1'>123 Fake St</span><br />
                <span className='business-profile-address-city'>Cincinnati</span>,{' '}
                <span className='business-profile-address-state'>OH</span>{' '}
                <span className='zip'>12345</span>
              </div>
              <div className='business-profile-contact-info'>
                <div className='business-profile-contact-item'>
                  <span className='business-profile-contact-icon'>📞</span>{' '}
                  <a className='business-profile-contact-text'>(206)-123-9876</a>
                </div>
              </div>
              <p className='business-profile-description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <span className='delivery-methods-header'>Delivery Methods</span>
              <div className='delivery-methods-container'>
                <a className='delivery-method-link'>
                  Postmates
                </a>
                <a className='delivery-method-link'>
                  Grubhub
                </a>
                <a className='delivery-method-link'>
                  Ubereats
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessProfilePage;
