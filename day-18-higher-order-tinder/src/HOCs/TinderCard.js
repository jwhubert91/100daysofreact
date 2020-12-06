import React from 'react';

export default function TinderCard(component) {
  return function (props) {
    const C = component;
    return (
      <div className='card user-card-container'>
        <div className='card-body user-card-inner'>
          <C />
        </div>
      </div>
    );
  };
}
