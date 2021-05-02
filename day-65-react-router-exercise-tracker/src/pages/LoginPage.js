import React from 'react'
import {useHistory} from 'react-router-dom'
import PageHeader from '../components/PageHeader'

function LoginPage({isLoggedIn,toggleLogin}) {
  const history = useHistory()
  
  function handleClick() {
    toggleLogin()
    if (!isLoggedIn) {
      history.push('/food')
    }
  }

  return (
    <div className='col-xl-12'>
      <PageHeader 
        pageTitle={isLoggedIn ? "Log Out" : "Login"} 
        pageIntroText={"Welcome to the Health Tracker. Please log in to continue."}
      />
      <main className='d-flex align-items-center'>
        {isLoggedIn ?  
            <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={handleClick}>
              Log Out
            </button>
          : 
            <button type="button" className="btn btn-primary btn-lg btn-block" onClick={handleClick}>
              Log In
            </button>
        }
      </main>
    </div>
  )
}

export default LoginPage
