import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddFavorite } from '../../redux/actions/favorites';
import { RemoveFavorite } from '../../redux/actions/favorites';
import './CharacterCard.css';

const CharacterCard = ({character}) => { //{character}

    const dispatch = useDispatch();
    const favorites = useSelector( store => store.favorites );

    const isFavorite = () =>{
      for(let favorite of favorites){
        if(favorite.id === character.id) return true;
      }      return false;
    };

    return(
      <div className={character.description!==""?"characterCard cardWithDescription":"characterCard"}>
        <img src={character.thumbnail.path+'.'+character.thumbnail.extension} alt={character.name} />
        <div className="characterCard_footer">
          <div className="characterCard_header">
            <div  className="characterCard_star" 
                  onClick={()=>{
                    (favorites.filter(c=>c.id===character.id).length>0)?
                      dispatch(RemoveFavorite({...character}))
                      :dispatch(AddFavorite({...character}))}}
            >
              <i className={isFavorite()?"fa fa-star":"fa fa-star-o"}/>
            </div>
            <h3>{character.name}</h3>
          </div>
          <p className="card__description">{character.description}</p>
        </div>
      </div>
 );
};

export default CharacterCard;