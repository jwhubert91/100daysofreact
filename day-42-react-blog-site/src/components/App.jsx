import React,{useState} from 'react';
import Posts from './Posts';
import Post from './Post';
import UpdatePost from './UpdatePost';
import CreatePost from './CreatePost';
import SignUp from './SignUp';
import SignIn from './SignIn';
import AppNav from './AppNav';
import {auth} from '../firebase';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

const App = () => {

  const [user,setUser] = useState(false);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
      console.log('Signed in as '+user.email);
    } else {
      setUser(false);
    }
  });

  return (
    <div className="app_container">
      <Router>
        <AppNav user={user} />
        <Switch>
          <Route exact path='/sign_up'>
            <SignUp />
          </Route>
          <Route exact path='/blogs/:uid/post/:id'>
            <Post />
          </Route>
          <Route exact path='/create_post'>
            <CreatePost user={user} />
          </Route>
          <Route exact path='/update_post/:id'>
            <UpdatePost user={user} />
          </Route>
          <Route exact path="/blogs/:uid/posts">
            <Posts user={user} />
          </Route>
          <Route exact path='/sign_in'>
            <SignIn user={user} />
          </Route>
          <Route exact path="/">
            <Redirect to="/sign_in" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;