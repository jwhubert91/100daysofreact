import React,{useState} from 'react';
import {auth} from './firebase';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

/* pages */
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
// import BusinessPage from './pages/BusinessPage';
// import EditBusinessPage from './pages/EditBusinessPage';

/* components */
import GlobalNavbar from './components/GlobalNavbar';

function App() {

  const [userExists,setUserExists] = useState(false);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUserExists(true);
      console.log('Signed in as '+user.email);
    } else {
      setUserExists(false);
    }
  });

  return (
    <div className="App">
      <Router>
        <GlobalNavbar />
        <Switch>
          <Route path='/login'>
            <SignIn />
          </Route>
          <Route>
            <SignUp path='/' />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
