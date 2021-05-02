import React,{useState,useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import exerciseData from '../data/exerciseData'

function ExerciseDetailPage() {
  const [exercise,setExercise] = useState(null)
  const history = useHistory()
  const { _id } = useParams()

  useEffect(() => {
    const currentExercise = exerciseData.find(obj => obj._id === _id)
    setExercise(currentExercise)
  }, [_id])

  function goBack() {
    history.go(-1);
  }

  return (
    <div>
      <button className="btn btn-warning" onClick={goBack}>Go Back</button>
      {!exercise && "Sorry! There are currently no exercise items stored."}
      {exercise && (
        <div>
          <h2>{exercise.title}</h2>
          <h4>{exercise.date}</h4>
          <p>{exercise.description}</p>
          <p>{exercise.metric}</p>
        </div>
      )}
    </div>
  )
}

export default ExerciseDetailPage
