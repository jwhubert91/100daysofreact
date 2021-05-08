import React from "react"
import Navbar from "./components/Navbar"
import {Switch,Route} from 'react-router-dom'
import MailPage from "./pages/MailPage"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 pt-4'>
            <Switch>
              <Route path='/'>
                <MailPage />
              </Route>
            </Switch>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
