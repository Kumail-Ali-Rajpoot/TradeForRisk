import React from 'react'
import { useState } from 'react';
import "./LandingPage.css";
import { useNavigate } from 'react-router-dom';
export default function LandingPage() {
  const submitBtn = document.getElementById("submit-1");
  let [limitTime , setLimitTime] = useState(60)
  let [limit,setLimit] = useState(2);
  const [inputValue,setInputValue] = useState();
  const msg = document.getElementById("msg");
  let Navigate = useNavigate();
  function goToNextPage () {
    // alert("passwrod is correct");
    // prompt("If you want any complain write msg?")
    Navigate("/TradeForRisk")
  }
  function handleChange (e) {
      setInputValue(e.target.value);
  }
  function handleClick() {
    if(inputValue === "777888666") {
      msg.innerText = "verifying...";
      setTimeout(()=>{
        goToNextPage();
        msg.innerText = "verified";
        msg.style.color = "green";
      },2000)
    }else if (limit === 0) {
      submitBtn.disabled = true;
      let secondInterval = setInterval(()=>{
        setLimitTime(limitTime--);
        msg.innerText = `key locked for ${limitTime}s`;
        console.log(limitTime)
      },1000)
      setTimeout(()=>{
      submitBtn.disabled = false;
      msg.innerText = `retry`;
      setLimitTime(limitTime--)
      clearInterval(secondInterval)
      },60000)
    }
    else {
      msg.innerText = "verifying...";
      msg.style.color = "white";
      setLimit(limit--);
      console.log(limit)
      submitBtn.disabled = true;
      setTimeout(()=>{
        submitBtn.disabled = false;
        msg.innerText = "invalid";
        msg.style.color = "red";
      },2000)
    }
  }
  return (
    <div className="App">
    <div class="container">
    <div class="child">
        <label for="">Enter a key</label>
        <input type="password" placeholder="Enter key" onChange={handleChange} name="key" id="placeholder-1"></input>
        <p id="msg">Require</p>
        <div>
              <button id="submit-1" onClick={handleClick}>GO TRADE FOR RISK</button>
        </div>
    </div>
    <div class="animation-box"></div>
    <div id="yellow-line"></div>
    <p id="description">Purposes of website to make is my personal trading stretgy which is 95% accurate.</p>
</div>
</div>
)
}
