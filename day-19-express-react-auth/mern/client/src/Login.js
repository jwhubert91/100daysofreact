import React from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        email: event.target.email.value,
        password: event.target.password.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            localStorage.setItem('token', data.token);
          });
          history.push('/');
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error(err);
        alert('Error logging in please try again.');
      });
  };
  return (
    <>
      <h3>Login</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            Email
            <input type='email' name='email' placeholder='Email' />
          </label>
        </div>
        <div>
          <label>
            Password
            <input type='password' name='password' placeholder='Password' />
          </label>
        </div>
        <button type='submit'>Log in</button>
      </form>
    </>
  );
}

export default Login;
