import React from 'react'
import {useState, useEffect} from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {


  const {id} = useParams();
  const [cocktail, setCocktails] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAPI = async () => {
    setLoading(true);
    try{
      const res = await fetch(`${url}${id}`);
      const ret = await res.json();
      if(ret.drinks){
        const tmp = {
          name: ret.drinks[0].strDrink,
          img: ret.drinks[0].strDrinkThumb,
          info: ret.drinks[0].strAlcoholic,
          category: ret.drinks[0].strCategory,
          glass: ret.drinks[0].strGlass,
          instructions: ret.drinks[0].strInstructions,
          ingredients: [
            ret.drinks[0].strIngredient1,
            ret.drinks[0].strIngredient2,
            ret.drinks[0].strIngredient3,
            ret.drinks[0].strIngredient4,
            ret.drinks[0].strIngredient5,
          ]
        }
        setCocktails(tmp);  
      }else{
        setCocktails([]);
      }
      
    }catch(error){
      console.log(error);
    }finally{
      setLoading(false);
    }
  };

  useEffect(
    () => {
      fetchAPI();
    }
  ,[id])
  console.log(cocktail);

  return (
    <>{loading||<section className="section cocktail-section" >
          <Link to="/" className="btn btn-primary">
            back home
          </Link>
          <h2 className=" section-title">
            {cocktail.name}
          </h2>
          <div className="drink">
            <img src={cocktail.img}
            alt={cocktail.name} />
            <div className="drink-info">
              <p><span className="drink-data">name :</span> {cocktail.name}</p>
              <p><span className="drink-data">category :</span> {cocktail.category}</p>
              <p><span className="drink-data">info :</span> {cocktail.info}</p>
              <p><span className="drink-data">glass :</span> {cocktail.glass}</p>
              <p><span className="drink-data">instructons :</span> {cocktail.instructions}</p>
              <p><span className="drink-data">ingredients :</span>
              {cocktail.ingredients.map((item, index) => {
                return <>{item&&<span key = {index}>{item}</span>}</>
              })}
              </p>
            </div>
          </div>
        </section>}</>
  )
}

export default SingleCocktail
 