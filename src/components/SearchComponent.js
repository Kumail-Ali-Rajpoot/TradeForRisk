import React, { useState } from 'react'
import "./SearchComponent.css"
import TradingDB from "./Content/data/TradingDB"

const SearchComponent = ({searchClick,searchExpression}) => {
  const [inputValue,setInputValue] = useState();
  function handleChange (e) {
    console.log(e.target.value);
    setInputValue(e.target.value);
  }
  function handleClick () {
    let input = TradingDB.find(data=>data.serialNumber == inputValue || data.date === inputValue);
    if(input){
      searchClick(input);
      searchExpression(true);
    }
    else {
      searchExpression(false);
    }
  }
  return (
    <div className='SearchComponent-container'>
      <div className='Search-container'>
        <p >Enter A Trade Date Or Serial Number</p>
        <input type="text" onChange={handleChange} placeholder='Search trade' />
      </div>
      <button className="searchBtn" onClick={handleClick}>Search</button>
    </div>
  )
}

export default SearchComponent