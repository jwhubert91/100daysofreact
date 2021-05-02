import React,{useState,useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import foodData from '../data/foodData'

function FoodDetail() {
  const [food,setFood] = useState(null)
  const history = useHistory()
  const { slug } = useParams()

  useEffect(() => {
    const currentFood = foodData.find(obj => obj.title === decodeURI(slug))
    setFood(currentFood)
  }, [slug])

  function goBack() {
    history.go(-1);
  }
  
  return (
    <div>
      <button className="btn btn-warning" onClick={goBack}>Go Back</button>
      {!food && "Sorry! There are currently no food items stored."}
      {food && (
        <div>
          <h2>{food.title}</h2>
          <h4>{food.date}</h4>
          <p>{food.description}</p>
          <p>{food.metric}</p>
        </div>
      )}
    </div>
  )
}

export default FoodDetail
