import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import CardItemImage1 from '../images/img-9.jpg';
import CardItemImage2 from '../images/img-2.jpg';
import CardItemImage3 from '../images/img-3.jpg';
import CardItemImage4 from '../images/img-4.jpg';
import CardItemImage8 from '../images/img-8.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these epic destinations</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={CardItemImage1}
              text='Explore the hidden waterfall deep inside the Amazon rainforest'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={CardItemImage2}
              text='Travel through the islands of Bali in a private cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={CardItemImage3}
              text='Set Sail in the Caribbean and Discover Sunken Ships'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={CardItemImage4}
              text='Experience soccer on a remote Norwegian island'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={CardItemImage8}
              text='Ride through the Sahara Desert on a guided tour'
              label='Adrenaline'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
