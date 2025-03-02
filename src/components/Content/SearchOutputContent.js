import React, { useState } from 'react'
import img2 from "./data/imageData/xauusd.png"
import "../SearchOutput.css"
function SearchOutputContent({outputData}) {
      const accountIncrease = {
            width:`${outputData.totalAccountIncrease}`,
            backgroundColor:`${outputData.profit?"green":"crimson"}`,
      }
      const tradeAccuracy = {
            width:`${outputData.tradeAccuracy}`,
            backgroundColor:"purple",
      }
      const riskRewardRatio = {
            width:`${outputData.riskRewardRatio}`,
            backgroundColor:"goldenrod",
      }
      // const profitLossStyle = {
      //       backgroundColor:`${outputData.profit?"green":"crimson"}`,
      // }
      
  return (
    <div className='SearchOutputContent-container'>
      <div className="date-day-container">
            <p className='output-date-day' id="ouput-date">Date: {outputData.date}</p>
      <div className="currency-info-container">
            <img className='currency-image' src={outputData.forex?outputData.forexImg:`https://assets.coincap.io/assets/icons/${outputData.name}@2x.png`} alt="" />
            <h2 className='currency-name'>{outputData.forex?outputData.forexName:outputData.name}</h2>
      </div>
            <p className='output-date-day' id="ouput-day">Day: {outputData.day}</p>
      </div>
        <div className="OutputImage-container">
        <img src={outputData.src} alt="" className="outputImg" />
        </div>
        <div className="parent-outputInfo-container">
        <div className="outputInfo-container">
              <p className='trade-info-heading'>PL_LS</p>
              <h3 className={`trade-percentage ${outputData.profit?"c-green":"c-red"}`}>{outputData.profit?"+":"-"}{outputData.PF_LS}</h3>
              <p className='trade-ability-heading'>Account {outputData.profit?"Increase":"decrease"}</p>
              <div className="percentage-line">
                  <div style={accountIncrease} className="show-percentage-line">{outputData.totalAccountIncrease}</div>
              </div>
        </div>
        <div className="outputInfo-container">
              <p className='trade-info-heading'>Trade Accuracy</p>
              <h3 className="trade-percentage c-purple">{outputData.tradeAccuracy}</h3>
              <p className='trade-ability-heading'>Trade Accuracy</p>
              <div className="percentage-line">
                  <div style={tradeAccuracy} className="show-percentage-line">{outputData.tradeAccuracy}</div>
              </div>
        </div>
        <div className="outputInfo-container">
              <p className='trade-info-heading'>Trade Risk Reward Ratio</p>
              <h3 className="trade-percentage c-goldernod">{outputData.riskRewardRatio} Ratio</h3>
              <p className='trade-ability-heading'>Trade Risk Reward Ratio</p>
              <div className="percentage-line">
                  <div style={riskRewardRatio} className="show-percentage-line">{outputData.riskRewardRatio}%</div>
              </div>
        </div>
        </div>
      {/* <div className="over-all-percentage-container">
        <label className='percentage-label-of-trade'>Over All Trade Percentage</label>
        <div className="over-all-percentage"></div>
      </div> */}
    </div>
  )
}

export default SearchOutputContent