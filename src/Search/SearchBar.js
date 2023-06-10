import React, {useState} from "react";
import {FaSearch} from 'react-icons/fa';
import './SearchBar.css'

const SearchBar = ({setResults}) => {
    const [input,setInput]=useState("");
    const fetchData=(value)=>{
        fetch("https://fakestoreapi.com/products")
        .then((response)=>response.json())
        .then((json) =>{
           const results = json.filter((product)=>{
            return (  
                value &&
                product && 
                product.title && 
                product.title.toLowerCase().includes(value)
              )           
            });
           setResults(results);
        })
    }
    const handleChange=(value)=>{
        setInput(value);
        fetchData(value)
    }
    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon"/>
            <input 
            placeholder="Type to search..." 
            value={input} 
            onChange={(e)=>handleChange(e.target.value)}
            />
        </div>
    );
}
export default SearchBar;