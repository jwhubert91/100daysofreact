import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithGoogle, generateUserDocument, auth } from '../firebase';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [displayName, setDisplayName] = useState('');
  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password
  ) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      generateUserDocument(user, { displayName });
    } catch (error) {
      setError('Error signing up with email and password');
    }
    setEmail('');
    setPassword('');
    setDisplayName('');
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    } else if (name === 'displayName') {
      setDisplayName(value);
    }
  };
  return (
    <div className='container border border-primary rounded form-container my-3'>
      <h1 className='text-center mt-1'>Sign Up</h1>
      <div className='col'>
        <div className='row'>
          {error !== null && (
            <div className='alert alert-danger w-100'>{error}</div>
          )}
          <form className='w-100'>
            <div className='mb-3'>
              <label htmlFor='displayName' className='form-label'>
                Username:
              </label>
              <input
                type='text'
                name='displayName'
                value={displayName}
                placeholder='succession_is_overrated46'
                onChange={onChangeHandler}
                className='form-control'
              />
            </div>
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
                createUserWithEmailAndPasswordHandler(event, email, password)
              }
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className='row mt-3'>
          <p className='text-center w-100'>or</p>
          <button
            className='btn btn-block btn-primary'
            onClick={signInWithGoogle}
          >
            Sign Up with Google
          </button>
        </div>
        <div className='row mt-3'>
          <p className='text-center w-100'>
            Already have an account?{' '}
            <Link to='signIn' className='link'>
              Sign in here
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

export default SignUp;
