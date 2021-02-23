import React,{useState} from 'react'
import {auth} from '../firebase';
import './styles/Auth.css';

function SignUp(props) {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const clearFields = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  const handleConfirmPassword = () => {
    if (password.length < 6) {
      alert('Your password must be at least 6 characters long.')
      setPassword('');
      setConfirmPassword('');
      return false;
    }
    if (password !== confirmPassword) {
      alert('Your passwords do not match. Please try again.')
      setPassword('');
      setConfirmPassword('');
      return false;
    }
    return true;
  }

  const handleSignUp = () => {
    if (handleConfirmPassword()) {
      // password and confirm password match!
      auth.createUserWithEmailAndPassword(email,password)
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
      });
      clearFields()
    }
  }

  return (
    <div className='page-container'>
      <h1 className='page-title-header'>Sign Up</h1>
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
          <label>Confirm Password</label>
          <br />
          <input 
              name='sign-up-confirm-password-input'
              value={confirmPassword}
              type='password'
              className='auth-text-input'
              onChange={handleConfirmPasswordChange}
            />
        </div>
        <div className='auth-form-row'>
          <button 
            className='auth-form-submit'
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
        <div className='auth-form-row'>
          <p className='auth-alternate-prompt'>
            Already have an account?{' '}
            <a href='/login'>Login</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
