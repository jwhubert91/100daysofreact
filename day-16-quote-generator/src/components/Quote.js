import React from 'react';
import PropTypes, { string } from 'prop-types';

function Quote(props) {
  const quoteStyle = {
    color: props.textColor,
  };
  return (
    <div className='quote-box' style={quoteStyle}>
      <p className='quote-text'>{props.quote}</p>
      <p className='quote-author'>
        <strong>{props.author}</strong>
      </p>
    </div>
  );
}

Quote.propTypes = {
  author: PropTypes.string,
  quote: PropTypes.string.isRequired,
};

Quote.defaultProps = {
  quote:
    '(1) Click the "Generate Quote" button below to fetch a new quote. (2) Either choose a color, or let one be randomly generated for you. (3) Enjoy.',
};

export default Quote;
