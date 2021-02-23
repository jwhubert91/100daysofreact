import React,{useState} from 'react'
import {auth} from '../firebase';
import './styles/Auth.css';

function SignIn(props) {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const clearFields = () => {
    setEmail('');
    setPassword('');
  }

  const logUserIn = () => {
    auth.signInWithEmailAndPassword(email, password)
      .then(result => {
        alert(email+' signed in successfully',clearFields());
      })
      .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    })
  }

  return (
    <div className='page-container'>
      <h1 className='page-title-header'>Log In</h1>
      <div className='auth-form-container'>
        <div className='auth-form-row'>
          <label>Email</label>
          <br />
          <input 
            name='sign-up-email-input'
            value={email}
            type='email'
            className='auth-text-input'
            onChange={handleEmailChange}
          />
        </div>
        <div className='auth-form-row'>
          <label>Password</label>
          <br />
          <input 
              name='sign-up-password-input'
              value={password}
              type='password'
              className='auth-text-input'
              onChange={handlePasswordChange}
            />
        </div>
        <div className='auth-form-row'>
          <button 
            className='auth-form-submit'
            onClick={logUserIn}
          >
            Log In
          </button>
        </div>
        <div className='auth-form-row'>
          <p className='auth-alternate-prompt'>
            Don't have an account?{' '}
            <a href='/'>Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn
