import React from 'react';
import './NoFavorites.css';

const NoFavorites = () => {
    
    return(
        <div className="noFavoritesContainer">
            <div className="welcomeContainer">
                <p className="welcomeText">WELC<br/>OME !</p>
            </div>
            <div className="noFavoritesTextContainer">
                <p className="noFavoritesText"> You haven't selected any <span id="marvelText">MARVEL</span> characters as your favorite yet. Go ahead and search.</p>
            </div>
        </div>
    );
};

export default NoFavorites;