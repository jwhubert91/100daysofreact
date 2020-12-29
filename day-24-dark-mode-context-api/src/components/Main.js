import React from 'react';
import ThemeToggle from './ThemeToggle';
import logoDark from '../logo-dark.svg';
import logoLight from '../logo-light.svg';
import { ThemeContextConsumer } from './themeContext';

function Main() {
  return (
    <div>
      <ThemeContextConsumer>
        {(context) => (
          <div className={`Main ${context.theme}-theme-bg`}>
            <header className='Main-header'>
              <ThemeToggle />
              {context.theme === 'dark' ? (
                <img src={logoDark} className='Main-logo' alt='logo' />
              ) : (
                <img src={logoLight} className='Main-logo' alt='logo' />
              )}
              <p className={`${context.theme}-theme-text`}>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className={`${context.theme}-theme-link`}
                href='https://reactjs.org'
                target='_blank'
                rel='noopener noreferrer'
              >
                Learn React
              </a>
            </header>
          </div>
        )}
      </ThemeContextConsumer>
    </div>
  );
}

export default Main;
