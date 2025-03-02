import './App.css';
import TradeForRisk from "./components/TradeForRisk.js";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import About  from "./components/About"
import Home   from "./components/Home"
import Trades  from "./components/Trades"
import TradeDB from "./components/TradesDB"
function App() {
  document.body.style.overflowX = "hidden";
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/TradeForRisk' element={<TradeForRisk/>}/>
      <Route path='/About  ' element={<About  />}/>
      <Route path='/Home   ' element={<Home   />}/>
      <Route path='/Trades ' element={<Trades />}/>
      <Route path='/TradeDB' element={<TradeDB/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
