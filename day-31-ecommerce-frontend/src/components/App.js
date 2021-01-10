import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Navbar from './Navbar';
import Hero from './Hero';
import HomeGrid from './HomeGrid';
import Footer from './Footer';
import './App.css';
import HeaderBanner from './HeaderBanner';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3500);
  }, []);

  return (
    <div id='app-container'>
      {loading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <HeaderBanner />
          <Navbar />
          <Hero />
        </React.Fragment>
        /* 
					<HomeGrid />
					<Footer /> 
				*/
      )}
    </div>
  );
}

export default App;
