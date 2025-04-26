import React, { useEffect, useState } from "react";
import "./TradeForRisk.css";
import AboutLink from "./About";
import HomeLink from "./Home";
import TradesLink from "./Trades";
import TradeDBLink from "./TradesDB";
import Search from "./SearchComponent"
import videoDB from "./videos/video.mp4"
import SearchOutput from "./SearchOutput";
import Footer from "./Footer";
// -----------------------------------------------------------------------------------------------------------
// End import files
// -----------------------------------------------------------------------------------------------------------
function TradeForRisk() {
  const HomeBtn = document.getElementById("Home");
  const AboutBtn = document.getElementById("About");
  const TradesBtn = document.getElementById("Trades");
  const TradesDBBtn = document.getElementById("TradesDB");
  
  let [Home, setHome] = useState(true);
  let [About, setAbout] = useState(false);
  let [Trades, setTrades] = useState(false);
  let [TradesDB, setTradesDB] = useState(false);

  const [inputData,setInputData] = useState({
    date:"",
    day:"",
    PF_LS:"",
    img:"",
  })
  const [searchOutput,setSearchOutput] = useState(false);

  const [searchFound,setSearchFound] = useState(false);

  function problemHandle (expression) {
    setSearchFound(expression)
    console.log(searchFound)
    setSearchOutput(searchOutput?false:true);
  }
  const [menu,setMenu] = useState(false);
  function handleMenu () {
    setMenu(!menu);
  }
  function handleClick (input) {
    setInputData(input);
    setSearchOutput(searchOutput?false:true);
  }
  console.log(inputData);

  // document.body.style.backgroundColor = "#282c34";
  document.body.overFlow = "hidden";
  return (
    <>
        <video autoPlay loop muted src={videoDB} style={{position:"fixed",width: "100%",height:"100%",objectFit:"cover"}}></video>
      <div className={searchOutput?"searchOutput-container":"none"}>
      {searchFound?
        <SearchOutput outputData={inputData} handleClick={handleClick}/>
        :
        <>
        <button onClick={handleClick} className="backOutput-btn">{"⬅"}</button>
        <div className="result-msg-container">search is not found?</div>
        </>
      }
      </div>
      <div className={searchOutput?"none":"TradeForRisk-container"}>
      <div className="container">
        <nav id="navbar">
          <div className="logo-container">
            <h1>TrdeForRisk</h1> <div className="logo-image"></div>
          </div>
          {/* ---------------------------------------------------------------------------------------- */}
          {/* This part will be executed when user open the website on desktop or big screen */}
          {/* ---------------------------------------------------------------------------------------- */}
          <div className="desktop-link-container" style={{display:"flex"}}>
            <p className={`links ${Home?"active":""}`}
              onClick={() => {
                setHome((Home = true));
                setAbout((About = false));
                setTrades((Trades = false));
                setTradesDB((TradesDB = false));
              }}id="Home">Home</p>
            <p className={`links ${About?"active":""}`}
              onClick={() => {
                setHome((Home = false));
                setAbout((About = true));
                setTrades((Trades = false));
                setTradesDB((TradesDB = false));
              }}
              id="About">About</p>
            <p className={`links ${Trades?"active":""}`}
              onClick={() => {
                setHome((Home = false));
                setAbout((About = false));
                setTrades((Trades = true));
                setTradesDB((TradesDB = false));
              }}
              id="Trades">
              Trades</p>
            <p className={`links ${TradesDB?"active":""}`}
              onClick={() => {
                setHome((Home = false));
                setAbout((About = false));
                setTrades((Trades = false));
                setTradesDB((TradesDB = true));
              }}
              id={`TradesDB`}> TradesDB</p>
          </div>
          {/* --------------------------------------------------------------------------------- */}
          {/* Desktop part is ended */}
          {/* --------------------------------------------------------------------------------- */}
{/* --------------------------------------------------------------------------------------------------------- */}
          {/* --------------------------------------------------------------------------------- */}
          {/* This part is excuted when website is open on mobile */}
          {/* --------------------------------------------------------------------------------- */}
          {
            menu?
            <div className="link-container" style={{display:"flex"}}>
            <p className={`links ${Home?"active":""}`}
              onClick={() => {
                handleMenu();
                setHome((Home = true));
                setAbout((About = false));
                setTrades((Trades = false));
                setTradesDB((TradesDB = false));
              }}id="Home">Home</p>
            <p className={`links ${About?"active":""}`}
              onClick={() => {
                handleMenu();
                setHome((Home = false));
                setAbout((About = true));
                setTrades((Trades = false));
                setTradesDB((TradesDB = false));
              }}
              id="About">About</p>
            <p className={`links ${Trades?"active":""}`}
              onClick={() => {
                handleMenu();
                setHome((Home = false));
                setAbout((About = false));
                setTrades((Trades = true));
                setTradesDB((TradesDB = false));
              }}
              id="Trades">
              Trades</p>
            <p className={`links ${TradesDB?"active":""}`}
              onClick={() => {
                handleMenu();
                setHome((Home = false));
                setAbout((About = false));
                setTrades((Trades = false));
                setTradesDB((TradesDB = true));
              }}
              id={`TradesDB`}> TradesDB</p>
          </div>
            :<div id="menu" onClick={handleMenu}>
          menu</div>}
          {/* -------------------------------------------------------------------------------------- */}
          {/* Mobile part is end */}
          {/* -------------------------------------------------------------------------------------- */}
          <div className="search-component">
            <Search searchClick={handleClick} searchExpression={problemHandle} />
          </div>
        </nav>
        <nav className="search-navbar">
          <div className="android-search-component">
            <Search searchClick={handleClick} searchExpression={problemHandle} />
          </div>
        </nav>
      </div>
      <div className="main-content-container">
      <main id="main-content">
        {Home ? <HomeLink /> : ""}
        {About ? <AboutLink /> : ""}
        {Trades ? <TradesLink /> : ""}
        {TradesDB ? <TradeDBLink /> : ""}
      </main>
      </div>
      {/* ------------------------------------------------------------------------------------------ */}
      {/* This part is of footer of the website */}
      {/* ------------------------------------------------------------------------------------------ */}
      <footer>
          <Footer/>
      </footer>
      </div>
    </>
  );
}

export default TradeForRisk;
