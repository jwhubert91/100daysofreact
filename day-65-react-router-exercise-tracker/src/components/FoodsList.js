import React from 'react'
import {Link} from 'react-router-dom'
import foodData from '../data/foodData'
import ListingCard from '../components/ListingCard'

function FoodsList() {
  const currentFoods = foodData.map(obj => {
    const currentPath = ("/food/" + encodeURI(obj.title))
    return (
      <Link to={currentPath} key={obj._id}>
        <ListingCard
          id={obj._id}
          title={obj.title}
          date={obj.date}
          description={obj.description}
          metric={obj.metric}
          borderColor={"success"}
        />
      </Link>
    )
  })

  return (
    <div>
      {currentFoods && currentFoods}
    </div>
  )
}

export default FoodsList
