import React from 'react';
import "./Home.css";
import HomeContent from './Content/HomeContent';
import homeData from './Content/data/HomeDB';
import "./Content/data/TopTrades.css";
function Home() {
  return (
    <div className='container'>
      <div className="homeSlide">
        <p className='home-heading'>Top Trades of the VGC<br/><p style={{color:"orange"}}>"volume gain candles"</p></p>
        <div className="image-container">
          <div id="top-trade-img1" className='top-trades-images'></div>
          <div id="top-trade-img2" className='top-trades-images'></div>
          <div id="top-trade-img3" className='top-trades-images'></div>
          <div id="top-trade-img4" className='top-trades-images'></div>
          <div id="top-trade-img5" className='top-trades-images'></div>
          <div id="top-trade-img6" className='top-trades-images'></div>
        </div>
        {
          homeData.map(data=><HomeContent
            title={data.title}
            content={data.content}
            />
          )
        }
      </div>
    </div>
  )
}

export default Home