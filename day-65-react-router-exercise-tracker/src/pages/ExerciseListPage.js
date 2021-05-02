import React from 'react'
import {Link} from 'react-router-dom'
import exerciseData from '../data/exerciseData'
import ListingCard from '../components/ListingCard'
import PageHeader from '../components/PageHeader'

function ExerciseListPage() {

  const exercises = exerciseData.map(obj => {
    const currentPath = ("/exercises/" + obj._id)
    return (
      <Link to={currentPath} key={obj._id}>
        <ListingCard
          id={obj._id}
          title={obj.title}
          date={obj.date}
          description={obj.description}
          metric={obj.metric}
          borderColor={"info"}
        />
      </Link>
    )
  })

  return (
    <div className='col-xl-12'> 
      <PageHeader 
        pageTitle={"Exercise Tracker"} 
        pageIntroText={"Welcome to the Exercise Tracker, where you can track your activities."}
      />
      <main>
        {exercises && exercises}
      </main>
    </div>
  )
}

export default ExerciseListPage
