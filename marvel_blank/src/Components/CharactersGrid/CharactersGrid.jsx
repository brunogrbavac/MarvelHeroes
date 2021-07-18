import React, { useState, useEffect, Fragment } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import Loading from './Loading/Loading';
import NoResults from './NoResults/NoResults';
import NoFavorites from './NoFavorites/NoFavorites';
import './CharactersGrid.css';
import filter from '../../Functions/Filter/filter';
import { useSelector } from 'react-redux';

const CharactersGrid = () => {
    const searchedWord = useSelector(store => store.search);
    const characters = useSelector(store => store.characters);
    const favorites = useSelector(store => store.favorites);
    const [ resultCharacters, setResultCharacters ] = useState(()=>[]);


    useEffect(()=>{
        if(searchedWord!==""&&characters.length>0){
            setResultCharacters(filter(searchedWord,characters))
        };
    },[searchedWord,characters]);


    return(
        <div>
            {(searchedWord!=="")?
                <Fragment>
                    {characters.length===0?
                        <Loading/>
                        :
                        <Fragment>
                            {resultCharacters.length===0?
                                <NoResults/>
                                :
                                <div className="charactersGrid">
                                    {resultCharacters.map( character => 
                                        <CharacterCard character={character}/>
                                    )}
                                </div>
                        }</Fragment>
                }           
                </Fragment>
                :
                <Fragment>
                    {favorites.length===0?
                        <NoFavorites/>
                        :
                        <div className="charactersGrid">
                            {favorites.map( character => 
                                <CharacterCard character={character}/>
                            )}
                        </div>
                }</Fragment>
        }
        </div>
    );
};

export default CharactersGrid;