import React from 'react';
import Search from "./Search/Search";
import marvel from '../../images/marvel.png';
import blank from '../../images/blank.svg';
import './Searchbar.css';

const Searchbar = () => {

    return(
        <header>
            <nav className="searchbar">
                <div className="searchbar_logo"> 
                    <a href="https://www.marvel.com/"><img src={marvel} alt="Marvel" className="marvel"/></a>
                    <a href="/" className="connector">×</a>
                    <a href="https://blankhq.co/"><img src={blank} alt="blank" className="blank"/></a>
                </div>
                <div className="searchbar_search">
                    <Search/>
                </div>
            </nav>
        </header>
    );
};

export default Searchbar;