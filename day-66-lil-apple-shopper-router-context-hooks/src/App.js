import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ProductsList from './ProductsList'
import ProductsDetail from './ProductDetail'
import Cart from './Cart'

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />
      <main className='app__container'>
        <Switch>
          <Route exact path='/'>
            <ProductsList />
          </Route>
          <Route exact path='/products/:id'>
            <ProductsDetail />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
