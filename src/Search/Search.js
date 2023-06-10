import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
import SearchBar from './SearchBar';
import './SearchBar.css';
import SearchResultList from './SearchResultList';
const Search = () => {
    const [results,setResults]=useState([]);
    return (
        <div className='search'>
            <div className='search-bar-container'>
               <SearchBar setResults={setResults}/>
               <SearchResultList results={results}/>

            </div>
        </div>
    );
}
export default Search;