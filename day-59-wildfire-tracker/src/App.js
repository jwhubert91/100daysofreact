import React,{useState,useEffect} from 'react'
import LoaderSpinner from './components/LoaderSpinner'
import Map from './components/Map'
import Header from './Header'

function App() {
  const [eventData,setEventData] = useState([])
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const {events} = await res.json()
      
      setEventData(events)
      setLoading(false)
    }

    fetchEvents()

    console.log(eventData)
  }, [])

  return (
    <div>
      <Header />
      {!loading ? <Map eventData={eventData} /> : <LoaderSpinner />}
    </div>
  );
}

export default App;
