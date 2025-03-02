import React from 'react'
import "./Trades.css";
import TradesData from "./Content/data/TradingDB" 
import TradesContent from './Content/TradesContent';
function Trades() {
  return (
    <div className='Trades-container'>
      {
        TradesData.map(data=><TradesContent
        date={data.date}
        day={data.day}
        img={data.src}
        forex={data.forex}
        forexImg={data.forexImg}
        forexName={data.forexName}
        name={data.name}
        ></TradesContent>
        )
      }
    </div>
  )
}

export default Trades