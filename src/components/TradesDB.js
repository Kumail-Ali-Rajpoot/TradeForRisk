import React from 'react'
import "./TradesDB.css"
import TradingDB from './Content/data/TradingDB'
import TradesDBContent from './Content/TradesDBContent'
function TradesDB() {
  return (
    <div className='container TradesDB-container'>
      <div className="slide">
      <nav className='info-nav'>
        <p className='trade-info'>Symbol</p>
        <p className='trade-info'>Name</p>
        <p className='trade-info'>Date</p>
        <p className='trade-info'>Day</p>
        <p className='trade-info'>Risk/Ratio</p>
        <p className='trade-info'>Time Frame</p>
        <p className='trade-info'>PF/LS</p>
      </nav>
      {
        TradingDB.map(data=><TradesDBContent 
        name={data.name}
        date={data.date}
        day={data.day}
        riskReward={data.riskRewardRatio}
        PF_LS={data.PF_LS}
        timeFrame={data.timeFrame}
        profit={data.profit}
        src={data.src}
        stretegy={data.stretegy}
        reason={data.reason}
        currency={data.currency}
        forex={data.forex}
        forexName={data.forexName}
        forexImg={data.forexImg}
        />)
      }
      </div>
    </div>
  )
}

export default TradesDB