import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ProfilePage from './ProfilePage';
import PasswordReset from './PasswordReset';

const Application = () => {
  const user = null;
  return user ? (
    <ProfilePage />
  ) : (
    <Router>
      <Switch>
        <Route path='/signUp'>
          <SignUp />
        </Route>
        <Route path='/'>
          <SignIn />
        </Route>
        <Route path='/passwordReset'>
          <PasswordReset />
        </Route>
      </Switch>
    </Router>
  );
};

export default Application;
