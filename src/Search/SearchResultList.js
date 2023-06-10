import React from "react";
import './searchResultList.css'
import  SearchResult from "./SearchResult";
const SearchResultList=({results})=>{
    return(
    <div className="results-list">
       {results.map((result,id)=>{
        console.log(result);
        return <SearchResult result={result} key={id} />
       })
       }
       {/* <div>A</div>
       <div>B</div>
       <div>C</div> */}
    </div>
    )
}
export default SearchResultList;