import React,{useState} from 'react';
import PageTitle from './PageTitle';
import {Input,Button} from 'antd';
import {auth} from '../firebase';
import {Link,Redirect} from 'react-router-dom';

const SignIn = (props) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [toPosts,setToPosts] = useState(false);

  const clearFields = () => {
    setEmail('');
    setPassword('');
  }

  const logUserIn = () => {
    auth.signInWithEmailAndPassword(email, password)
      .then(result => {
        console.log(email+' signed in successfully');
        setToPosts(true);
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

  const handleInputChange = e => {
    const {name,value} = e.currentTarget;
    name === 'email' && setEmail(value);
    name === 'password' && setPassword(value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    // User login goes here...
    logUserIn();
  }

  return (
    <div className="sign_up_container">
      {toPosts && (<Redirect to={`blogs/${props.user.uid}/posts`} />)}
      <PageTitle title="Sign In" />
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
                Login
              </Button>
              <div className="sign_in_prompt">
                <Link to="/sign_up">Don't have an account? Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default SignIn;