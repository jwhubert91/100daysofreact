import React from 'react';
import { ThemeContextConsumer } from './themeContext';

function Navbar() {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <nav className={`${context.theme}-theme-bg`}>
          <h2>
            <span className={`${context.theme}-theme-link nav-title-1`}>
              Themed
            </span>{' '}
            <span className={`${context.theme}-theme-text nav-title-2`}>
              CRA
            </span>
          </h2>
        </nav>
      )}
    </ThemeContextConsumer>
  );
}

export default Navbar;
