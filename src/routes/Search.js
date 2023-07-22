import React from 'react'
import SearchPage from "../components/SearchPage"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Search = ({AppState}) => {
  return (
    <div>
      <SearchPage AppState={AppState}/>
    </div>
  )
}

export default Search
