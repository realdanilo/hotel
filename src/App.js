import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Home from "./screens/Home"
import MyNavbar from "./components/MyNavbar"
import MyFooter from "./components/MyFooter"
import infoHeroData from "./infoHeroData"
import QuickInfoData from "./screens/QuickInfoData"

function App() {
  const findInfoHero = link=>{
    return infoHeroData.filter(x=> x.link == link)[0]
  }
  return (
    <>
    <MyNavbar/>
    <Switch>
      <Route exact path="/" render={(rp)=> <Home {...rp}/>} />
      <Route exact path="/info/:infoLink" render={(rp)=> <QuickInfoData data={findInfoHero(rp.match.params.infoLink)} {...rp}/>} />
      <Route  path="/" render={(rp)=> <h3>Error Path</h3>} />
    </Switch>
    <MyFooter/>
    </>
  );
}

export default App;
