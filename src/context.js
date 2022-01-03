import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchform, setSearchform] = useState('a');


  const fetchAPI = useCallback( async () => {
    setLoading(true);
    try{
      const res = await fetch(`${url}${searchform}`);
      const ret = await res.json();
      if(ret.drinks){
        setCocktails(ret.drinks);  
      }else{
        setCocktails([]);
        
      }
      
    }catch(error){
      console.log(error);
    }finally{
      setLoading(false);
    }
  }, [searchform] );



  useEffect( () => {
    fetchAPI();
  }
  , [searchform]);


  return <AppContext.Provider value={{
    cocktails,
    loading,
    setSearchform
  }}>
  {children}
  </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
 