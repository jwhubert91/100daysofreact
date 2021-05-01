import React from 'react'
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/features'><Features /></Route>
        <Route exact path='/pricing'><Pricing /></Route>
        <Route exact path='/about'><About /></Route>
        <Route path='/'><Home /></Route>
      </Switch>
    </div>
  );
}

export default App;
