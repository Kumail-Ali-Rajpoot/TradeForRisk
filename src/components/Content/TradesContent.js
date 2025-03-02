import React from 'react'
import "../Trades.css"
function TradesContent({date,day,img,name,forexName,forexImg,forex}) {
  
  return (
    <div className='TradesContent-container'>
      <div className="date-and-day-container">
      <p className="date-day">Date: {date}</p>
        {
          <img src={forex?forexImg:`https://assets.coincap.io/assets/icons/${name}@2x.png`} alt="" className='symbol-img'/>
        }
      <p className="date-day">Day: {day}</p>
      </div>      
      <img className='trades-image' src={img} alt="" />
    </div>
  )
}

export default TradesContent