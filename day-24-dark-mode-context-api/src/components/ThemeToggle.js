import React from 'react';
import './ThemeToggle.css';
import { ThemeContextConsumer } from './themeContext';

function ThemeToggle() {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className='toggle'>
          <span className={`toggle-label ${context.theme}-theme-text`}>
            Light Mode
          </span>
          <label className='switch'>
            <input
              type='checkbox'
              checked={context.theme === 'dark'}
              onChange={context.toggleTheme}
            />
            <span className='slider round'></span>
          </label>
          <span className={`toggle-label ${context.theme}-theme-text`}>
            Dark Mode
          </span>
        </div>
      )}
    </ThemeContextConsumer>
  );
}

export default ThemeToggle;
