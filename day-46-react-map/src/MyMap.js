import React from 'react'
import ReactMapGL from 'react-map-gl'

function MyMap() {

  const mapboxToken = process.env.REACT_APP_MAPBOX_API_TOKEN;

  // norms: 34.080708839763325, -118.37632341532199
  const [viewport, setViewport] = React.useState({
    latitude: 34.080708839763325,
    longitude: -118.37632341532199,
    zoom: 10
  });

  return (
    <div className='map-container'>
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={(viewport) => setViewport(viewport)}
        mapboxApiAccessToken={mapboxToken}
      />
    </div>
  )
}

export default MyMap
