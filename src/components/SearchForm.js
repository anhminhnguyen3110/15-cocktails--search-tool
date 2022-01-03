import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {

  const {setSearchform} = useGlobalContext();
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label for= "name">search your favorite cocktail</label>
          <input id="name" type="text" name = "name" onChange= {(e) => setSearchform(e.target.value)}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
 