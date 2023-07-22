import React, { useContext } from 'react'
import LoginPage from "../components/LoginPage"
import { DataContext } from '../components/DataContext'

const Login = ({AppState}) => {
  const value = useContext(DataContext);
  console.log("value in Login Route", value);
  return (
    <div>
      <LoginPage AppState={AppState}/>
    </div>
  )
}

export default Login
