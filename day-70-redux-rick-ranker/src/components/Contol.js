import React,{useState,useEffect} from 'react'
import {store,upVote,downVote} from '../redux'

function Contol() {
  const [videoState,setVideoState] = useState({})

  useEffect(() => {
    setVideoState(setVideoState(store.getState()))
  }, [])

  store.subscribe(() => {
    setVideoState(store.getState())
  })

  const handleUpVote = () => {
    store.dispatch(upVote())
  }

  const handleDownVote = () => {
    store.dispatch(downVote())
  }

  return (
    <div className='card'>
      <div className='text-center'>
        <h3>Votes: {videoState ? videoState.votes : 0}</h3>
      </div>
      <div className="card-body d-flex justify-content-evenly">
        <button className="btn btn-secondary" onClick={handleDownVote}>Vote Down 👎</button>
        <button className="btn btn-success" onClick={handleUpVote}>Vote Up 👍</button>
      </div>
    </div>
  )
}

export default Contol
