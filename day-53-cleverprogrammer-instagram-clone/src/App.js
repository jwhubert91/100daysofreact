import React, {useState,useEffect} from 'react';
import {db,auth} from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import {Modal,Button,Input} from '@material-ui/core';
import './App.css';
import Post from './Post';
import ImageUpload from './ImageUpload';

// video link: https://www.youtube.com/watch?v=f7T48W0cwXM&ab_channel=CleverProgrammer
// paused for sleep @ 3:00:44 - ignore Instagram embed

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [posts,setPosts] = useState([]);
  const [open,setOpen] = useState(false);
  const [openSignIn,setOpenSignIn] = useState(false);
  const [email,setEmail] = useState('');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [user,setUser] = useState('');

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
      unsubscribe();
    }
  },[user,username])

  useEffect(() => {
    // this is where the code runs
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // every time a new post is added, this code 
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })))
    })
  },[posts])

  const signUp = (e) => {
    // This is to prevent the page from refreshing when we submit the form
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = auth.currentUser;
        user.updateProfile({
          displayName: username
        })
      })
    .catch((error) => alert(error.message));

    // Close modal
    setOpen(false);
  }

  const signIn = (e) => {
    // sign up operation goes here...
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
      .then((authUser) => {
        console.log("Signed in...")
        console.log(authUser);
      })
      .catch((err) => alert(err.message))
    setOpenSignIn(false);
  }

  return (
    <div className="app">
      {/* Modals */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          {/* modal body */}
          <center>
            <h2 id="simple-modal-title">
              <span
                className='app__headerEmoji'
              >
              📸{' '}
              <a
                href='https://twitter.com/jwhubert91'
              >
              jwhubert-stagram
            </a>
            </span>
            </h2>
            <form className='app__signup'>
              <Input 
                type='text'
                placeholder='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input 
                type='email'
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input 
                type='password'
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type='submit' onClick={signUp}>Sign Up</Button>
            </form>
          </center>
        </div>
      </Modal>

      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          {/* modal body */}
          <center>
            <h2 id="simple-modal-title">
              <span
                className='app__headerEmoji'
              >
              📸{' '}
              <a
                href='https://twitter.com/jwhubert91'
              >
              jwhubert-stagram
            </a>
            </span>
            </h2>
            <form className='app__signup'>
              <Input 
                type='email'
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input 
                type='password'
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type='submit' onClick={signIn}>Sign In</Button>
            </form>
          </center>
        </div>
      </Modal>

      {/* Header */}
      <div className='app__header'>
        <span
          className='app__headerEmoji'
        >
          📸{' '}
          <a
          href='https://twitter.com/jwhubert91'
        >
          jwhubert-stagram
        </a>
        </span>
        {user ? (
        <Button onClick={() => auth.signOut()}>Logout</Button>
          ) : (
            <div 
              className='app__loginContainer'
            >
              <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
              <Button onClick={() => setOpen(true)}>Sign Up</Button>
            </div>
          )}
      </div>
    
      {/* Posts */}
      <div className='app__posts'>
        {
          posts.map(({id,post}) => (
            <Post 
              username={post.username}
              caption={post.caption}
              imageUrl={post.imageUrl}
              currentUser={username}
              key={id}
              postId={id}
            />
          ))
        }
      </div>

      {user ? (
        <ImageUpload username={user.displayName} />
      ) : (
        <h3>You need to login to post</h3>
      )}
    </div>
  );
}

export default App;
