import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass }) => {
  const item = {id: idDrink, name: strDrink, image: strDrinkThumb, info :strAlcoholic, glass: strGlass} 
  return (
    <article className="cocktail">
      <Link to={`/cocktail/${item.id}`}>
        <div className="img-container">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="cocktail-footer">
          <h3>{item.name}</h3>
          <h4>{item.glass}</h4>
          <p>{item.info}</p>
          <Link to={`/cocktail/${item.id}`} className='btn btn-primary btn-details'>
            details
          </Link>
        </div>
      </Link>
    </article>
  )
}

export default Cocktail
 