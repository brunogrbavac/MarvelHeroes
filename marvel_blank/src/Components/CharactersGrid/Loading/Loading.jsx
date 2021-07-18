import React from 'react';
import spiderman from '../../../images/spiderman.png';
import xmen from '../../../images/xmen.png';
import captainamerica from '../../../images/captainamerica.png';
import avengers from '../../../images/avengers.png';
import './Loading.css';

const Loading = () => {
    
    return(
        <div className="loadingContainer">
            <div>
                <img src={spiderman} alt="SpiderMan" className="loaderImg"/>
                <img src={xmen} alt="Xmen" className="loaderImg"/>
                <img src={avengers} alt="Avengers" className="loaderImg"/>
                <img src={captainamerica} alt="CaptainAmerica" className="loaderImg"/>
            </div>
            <p>
                LOADING CHARACTERS ...
            </p>
        </div>

    );
};

export default Loading;