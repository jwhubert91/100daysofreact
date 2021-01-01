import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

function PasswordReset() {
  const [email, setEmail] = useState('');
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'userEmail') {
      setEmail(value);
    }
  };
  const sendResetEmail = (event) => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {
          setEmailHasBeenSent(false);
        });
      })
      .catch(() => {
        setError('Error resetting password');
      });
  };
  return (
    <div className='container border border-primary rounded form-container my-3'>
      <h1 className='text-center mt-1'>Reset your Password</h1>
      <div className='col'>
        <div className='row'>
          <form className='w-100'>
            <div>
              {emailHasBeenSent && (
                <div className='alert alert-success w-100'>
                  An email has been sent to you!
                </div>
              )}
              {error !== null && (
                <div className='alert alert-danger w-100'>{error}</div>
              )}
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
            <button
              className='btn btn-block btn-success'
              onClick={sendResetEmail}
            >
              Send me a reset link
            </button>
          </form>
        </div>
        <div className='row mt-3'>
          <p className='text-center w-100'>
            <Link to='signIn' className='link'>
              &larr; back to sign in page
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;
