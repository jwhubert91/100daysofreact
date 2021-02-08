import React,{useState} from 'react';
import PageTitle from './PageTitle';
import {Input,Button} from 'antd';
import {auth} from '../firebase';
import {Link} from 'react-router-dom';

const SignUp = (props) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const clearFields = () => {
    setEmail('');
    setPassword('');
  }

  const signUp = () => {
    auth.createUserWithEmailAndPassword(email, password)
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

  const handleInputChange = e => {
    const {name,value} = e.currentTarget;
    name === 'email' && setEmail(value);
    name === 'password' && setPassword(value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    // User sign up goes here...
    signUp();
  }

  return (
    <div className="sign_up_container">
      <PageTitle title="Sign Up" />
      <div className="sign_up_container_inputs">
      <div className="post_inputs_container">
          <div className="post_input_container">
            <div>
              <h2>Email</h2>
            </div>
            <div className="post_input">
              <Input placeholder="Email" name="email" onChange={handleInputChange} value={email} />
            </div>
          </div>
          <div className="post_input_container">
            <div>
              <h2>Password</h2>
            </div>
            <div className="post_input">
              <Input.Password placeholder="Password" name="password" onChange={handleInputChange} value={password} />
            </div>
            <div className="post_input_button">
              <Button type="primary" block onClick={handleSubmit}>
                Sign Up
              </Button>
              <div className="sign_in_prompt">
                <Link to={`/sign_in`}>Already have an account? Log In</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default SignUp;