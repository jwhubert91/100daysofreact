import React from 'react'

function Header() {
  return (
    <header className="header text-center">
      <h1 className='header__title'>Redux Pomodoro Timer</h1>
      <p className="header__description">
        This simple pomodoro timer follows a 25 minute work / 5 minute break schedule. Read more about the pomodoro technique here:{' '}
        <a 
          target="_none" 
          href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
          className="header__descriptionLink"
        >link</a>
      </p>
    </header>
  )
}

export default Header
