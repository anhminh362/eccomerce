import React from "react";
import './SearchResult.css'
 const SearchResult=({result})=>{
    console.log(result);
  return <div className="search-result" onClick={(e)=>alert(`CLick on ${result}`)}>{result.title}</div>
}
export default SearchResult;