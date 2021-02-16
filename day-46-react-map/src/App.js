import React from 'react';
import MyMap from './MyMap';
require('dotenv').config()

function App() {
  return (
    <div className="App">
      <header>
        <h1>A very nice React map component</h1>
        <p>Default center point: <a href='https://www.yelp.com/biz/norms-restaurant-west-hollywood-3'>the greatest restaurant on earth</a></p>
        <span>Tech by Mapbox using <a href='https://www.npmjs.com/package/react-map-gl'><code>react-map-gl</code></a></span>
      </header>
      <MyMap />
      <footer>Dev by <a href='https://www.twitter.com/jwhubert91'>@jwhubert91</a></footer>
    </div>
  );
}

export default App;
