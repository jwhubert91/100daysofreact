import React, {useState,useEffect} from 'react';
import {db,auth} from './firebase';
import firebase from 'firebase';
import Post from './Post';

import './App.css';

function App() {

  const [newPost,setNewPost] = useState('');
  const [user,setUser] = useState(null);
  const [openSignUp,setOpenSignUp] = useState(false);
  const [email,setEmail] = useState('');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // a user is logged in
        setUser(authUser);
      } else {
        // there is no logged in user
        setUser(null);
      }
    })
    return () => {
      // perform some cleanup actions before firing useEffect
      console.log(user);
      unsubscribe();
    }
  },[user])

  const closeSignUp = () => {
    setOpenSignUp(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      text: newPost,
      username: user,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  }

  const handleAuthClick = (e) => {
    e.preventDefault();
    setOpenSignUp(true);
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    if (user) return auth.signOut();
    auth.createUserWithEmailAndPassword(email,password)
      .then(() => {
        const user = auth.currentUser;
        user.updateProfile({
          displayName: username
        })
      })
      .catch((error) => alert(error.message));

    setEmail('');
    setUsername('');
    setPassword('');
    setOpenSignUp(false);
  }

  const authPrompt = user ? (user.displayName) : ("Sign Up");

  return (
    <div className="app">
      {openSignUp && (
        <div className='app__modalContainer'>
          <div className='app__modalHeader'>
            <button className='app__modalHeaderButton' onClick={closeSignUp}>
              X
            </button>
          </div>
          <div className='app__modalBox'>
            <h1 className='app__modalBoxPrompt'>Sign Up</h1>
            <div className='app__modalBoxInputContainer'>
                <label>Username</label><br />
                <input
                  onChange={e => (setUsername(e.target.value))}
                  value={username}
                  className='app__modalBoxInput'
                />
            </div>
            <div className='app__modalBoxInputContainer'>
                <label>Email</label><br />
                <input
                  onChange={e => (setEmail(e.target.value))}
                  value={email}
                  className='app__modalBoxInput'
                />
            </div>
            <div className='app__modalBoxInputContainer'>
                <label>Password</label><br />
                <input
                  onChange={e => (setPassword(e.target.value))}
                  value={password}
                  type='password'
                  className='app__modalBoxInput'
                />
            </div>
            <button
                className='app__modalBoxSubmit'
                onClick={handleSignUp}
              >
                {authPrompt}
            </button>
            <p className='app__modalBoxAltPrompt'>
              Already a user?{' '}
              Login here
            </p>
          </div>
        </div>
      )}
      <div className='app__header'>
        <h2>Lil' Twitter Sign Up UI</h2>
        <h5>by{' '}
          <a href='https://www.twitter.com/jwhubert91'>@jwhubert91</a>
        </h5>
        <a
          className='app__headerSignUp'
          onClick={handleAuthClick}
        >
          {user ? (
            user.displayName
          ) : (
            "Sign Up"
          )}
        </a>
      </div>
      <div className='app__newPostContainer'>
        <form>
          <textarea
            type='text'
            placeholder="What's on your mind? (Max 240 characters)"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className='app_newPostTextInput'
            maxLength="240"
          />
          <button
            className='app__newPostTextSubmit'
            onClick={handleSubmit}
            disabled={!user}
          >
            Post It!
          </button>
        </form>
      </div>
      <div className='app__allPostsContainer'>
        <Post />
      </div>
    </div>
  );
}

export default App;
