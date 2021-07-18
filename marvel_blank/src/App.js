import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Searchbar from './Components/Searchbar/Searchbar.jsx';
import CharactersGrid from './Components/CharactersGrid/CharactersGrid.jsx';
import marvelCharacters from './Functions/marvelCharacters';
import { newCharacters } from './redux/actions/characters.js';
import { setFavorites } from './redux/actions/favorites';
import './App.css';

const App = () => {
  
  const dispatch = useDispatch();

  useEffect(()=>{
    marvelCharacters(15).then(res => {dispatch(newCharacters(res))}); //trenutno postoji oko 14 tisuća likova dostuopnih na API-ju
    if(localStorage.getItem('favoritesMarvel')!==null){ //ukoliko postoje likovi u localStorage-u ovog preglednika
      dispatch(setFavorites(JSON.parse(localStorage.getItem('favoritesMarvel'))))};
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  return (
    <div className="App">
      <Searchbar/>
      <CharactersGrid />
    </div>
  );
}

export default App;