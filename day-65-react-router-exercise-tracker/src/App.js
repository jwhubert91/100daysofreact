import React, {useState} from 'react';
import "bootswatch/dist/united/bootstrap.min.css";
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import {Switch,Route, Redirect} from 'react-router-dom';
import FoodPage from './pages/FoodPage';
import ExerciseListPage from './pages/ExerciseListPage';
import ExerciseDetailPage from './pages/ExerciseDetailPage'
import Footer from './components/Footer';

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)

  const toggleLogin = () => {
    setIsLoggedIn(prevState => prevState === true ? false : true)
  }

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} />
      <div className='container pt-4 pb-2 App__pageContainer'>
        {/* App routing switch goes here :) */}
        <Switch>
          <Route path='/food'>
            {isLoggedIn ? <FoodPage /> : <Redirect to='/' />}
          </Route>
          <Route exact path='/exercises'>
            {isLoggedIn ? <ExerciseListPage /> : <Redirect to='/' />}
          </Route>
          <Route exact path='/exercises/:_id'>
            <ExerciseDetailPage />
          </Route>
          <Route exact path='/'>
            <LoginPage isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
