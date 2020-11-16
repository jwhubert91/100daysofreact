import React from 'react';

function Error(props) {
  const errorClass =
    props.errorMessage.length > 0 ? 'error-text' : 'error-text hidden';
  return (
    <div className='error-container'>
      <span className={errorClass}>{props.errorMessage}</span>
    </div>
  );
}

export default Error;
