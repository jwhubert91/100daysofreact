import React from 'react'
import {Switch,Route,useRouteMatch} from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import FoodsList from '../components/FoodsList'
import FoodDetail from '../components/FoodDetail'

function FoodPage() {
  const {path} = useRouteMatch();
  return (
    <div className='col-xl-12'>
      <PageHeader 
        pageTitle={"Food Tracker"} 
        pageIntroText={"Welcome to the Food Tracker, where you can track meals and calories."}
      />
      <main>
        <Switch>
          <Route exact path={path+'/:slug'}>
            <FoodDetail />
          </Route>
          <Route exact path='/food/'>
            <FoodsList />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default FoodPage
