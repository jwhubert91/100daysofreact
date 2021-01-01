import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithGoogle, auth } from '../firebase';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    }
  };
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setError('Error signing in with email and password');
      console.error('Error signing in with email and password', error);
    });
  };
  return (
    <div className='container border border-primary rounded form-container my-3'>
      <h1 className='text-center mt-1'>Sign In</h1>
      <div className='col'>
        <div className='row'>
          {error !== null && (
            <div className='alert alert-danger w-100'>{error}</div>
          )}
          <form className='w-100'>
            <div className='mb-3'>
              <label htmlFor='userEmail' className='form-label'>
                Email:
              </label>
              <input
                type='email'
                name='userEmail'
                value={email}
                placeholder='e.g. briancox123@yahoo.com'
                onChange={onChangeHandler}
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='userEmail' className='form-label'>
                Password:
              </label>
              <input
                type='password'
                name='userPassword'
                className='form-control'
                value={password}
                onChange={onChangeHandler}
                placeholder='Your password'
              />
            </div>
            <button
              className='btn btn-block btn-success'
              onClick={(event) =>
                signInWithEmailAndPasswordHandler(event, email, password)
              }
            >
              Sign In
            </button>
          </form>
        </div>
        <div className='row mt-3'>
          <p className='text-center w-100'>or</p>
          <button
            className='btn btn-block btn-primary'
            onClick={signInWithGoogle}
          >
            Sign In with Google
          </button>
        </div>
        <div className='row mt-3'>
          <p className='text-center w-100'>
            Don't have an account?{' '}
            <Link to='signUp' className='link'>
              Sign up here
            </Link>
          </p>
          <p className='text-center w-100'>
            <Link to='passwordReset' className='link'>
              Forgot Password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
