import React from 'react';

function Header() {
  return (
    <React.Fragment>
      <h2>Welcome to the React Quote Generator</h2>
      <p>
        Built and styled by{' '}
        <a href='https://www.dev.to/jwhubert91' target='_none'>
          James Hubert
        </a>
      </p>
    </React.Fragment>
  );
}

export default Header;
