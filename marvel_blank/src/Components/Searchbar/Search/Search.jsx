import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Search as wordSearched } from '../../../redux/actions/search';
import './Search.css';

const Search = () => {

    const dispatch = useDispatch();
    const [value,setValue] = useState(()=>"");

    const handleSearch=(word)=>{
        setValue(word);
        dispatch(wordSearched(word));
    };

    return(
        <div className="search">
            {value!==""&&<i class="fa fa-times-circle" id="clearicon" onClick={()=>handleSearch("")}></i>}
            <input id="search_box" value={value} name="search" placeholder="Search" type="text" onChange={(event)=>handleSearch(event.target.value)}/>
            <i className="fa fa-search" id="saerchicon"/>
        </div>
    );
};
export default Search;