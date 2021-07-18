import React from 'react';
import sadDeadpool from '../../../images/sadDeadpool.png';
import './NoResults.css';

const NoResults = () => {
    
    return(
        <div className="noResultsContainer">
            <img src={sadDeadpool} alt="Sad Deadpool" className="deadpoolImg"/>
            <p className="sorryText"> WE ARE REALLY SORRY </p>
            <p className="noResultsText">But your search yielded no results. </p>
        </div>

    );
};

export default NoResults;