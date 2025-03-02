import React from 'react';
import "./SearchOutput.css";
import SearchOutputContent from './Content/SearchOutputContent';
function SearchOutput({outputData,handleClick}) {
  return (
    <div className='SearchOutput-container'>
        <button onClick={handleClick} className="backOutput-btn">{"⬅"}</button>
        <SearchOutputContent outputData={outputData}/>
    </div>
  )
}

export default SearchOutput