import React from 'react'
import HomePage from "../components/HomePage"

const Home = ({AppState}) => {
  return (
    <div>
      <HomePage AppState={AppState}/>
    </div>
  )
}

export default Home
