import React from 'react';
import { useState } from 'react';
import "../TradesDB.css";
function TradesDBContent({name,date,day,riskReward,PF_LS,timeFrame,profit,src,reason,stretegy,currency,forex,forexName,forexImg}) {
  let [display,setDisplay] = useState(false);
  function handleClick () {
    setDisplay(display = true);
  }
  return (
  <>
    <div className="tradeHolder" onClick={handleClick}>
        <p className='trade-info'>
        <img src={forex?forexImg:`https://assets.coincap.io/assets/icons/${name}@2x.png`} alt="img" id='img' />
        </p>
        <p className='trade-info trade-content'>{forex?forexName:name}</p>
        <p className='trade-info trade-content'>{date}</p>
        <p className='trade-info trade-content'>{day}</p>
        <p className='trade-info trade-content'>{riskReward}</p>
        <p className='trade-info trade-content'>{timeFrame}</p>       
        <p className='trade-info trade-content' id={`${profit?"profit":"loss"}`}>{`${profit?"+":"-"}${PF_LS}${currency}`}</p>
    </div>
    <div className="tradeHolderBioData" id={display?"show":"hide"}>
      <button className="exit" onClick={()=>{setDisplay(display = false)}}>x</button>
      <img src={src} alt='img' className="trade-img"/>
      <p className="stretegy-name">{`Stretegy Name:`} <span>{stretegy}</span></p>
      <p className="reason">{`Trade Reason: ${reason}`}</p>
    </div>
  </>
  )
}

export default TradesDBContent