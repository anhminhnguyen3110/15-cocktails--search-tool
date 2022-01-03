import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  )
}

export default Home
 