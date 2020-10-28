import React , {useEffect, useReducer} from "react"
import {Switch, Route} from "react-router-dom"
import Home from "./screens/Home"
import MyNavbar from "./components/MyNavbar"
import MyFooter from "./components/MyFooter"
import infoHeroData from "./infoHeroData"
import QuickInfoData from "./screens/QuickInfoData"
import Pool from "./screens/Pool"
import Events from "./screens/Events"
import Contact from "./screens/Contact.js"
import Rooms from "./screens/Rooms"
import SingleRoom from "./screens/SingleRoom"
import formatData from "./formatData.js"
import {RoomContext, DispatchContext} from "./utils/context"
import client from "./utils/contentful"
import {reducer} from "./utils/reducer"
// State Init
let initialState = {
  rooms: [],
  sortedRooms: [],
  featuredRooms: [],
  loading: true,
  type: "all",
  capacity: 1,
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  minSize: 0,
  maxSize: 0,
  breakfast: false,
  pets: false
};
//getData
const getData = async () => {
  let response = await client.getEntries({ content_type: "hotelRoom", order: "fields.price" });
  return {
    loading: false,
    rooms: formatData(response.items),
    sortedRooms: formatData(response.items),
    featuredRooms: formatData(response.items).filter(r => r.featured === true),
    type: 'all',
    capacity: 0,
    minPrice: 0,
    maxPrice: Math.max(...formatData(response.items).map(r => r.price)),
    minSize: 0,
    maxSize: Math.max(...formatData(response.items).map(r => r.size)),
    breakfast: false,
    pets: false,
    price: Math.max(...formatData(response.items).map(r => r.price))
  }
}
 // findInfoHero is constant data
 const findInfoHero = link=>{
  return infoHeroData.filter(x=> x.link == link)[0]
}

// App
function App() {
 const [state, dispatch] = useReducer(reducer, initialState)
 useEffect(()=>{
   const getInitdata = async()=>{
     let init = await getData()
     dispatch({type:"INIT", init})
    }
    getInitdata()
  },[])

  const getRoom = (slug)=>{
    return state.rooms.find(x => x.slug == slug)
  }

  return (
    <>
    <MyNavbar/>
      <DispatchContext.Provider value ={dispatch}>
        <RoomContext.Provider value={state}>
    <Switch>
      <Route exact path="/info/:infoLink" render={(rp)=> <QuickInfoData data={findInfoHero(rp.match.params.infoLink)} {...rp}/>} />
      <Route exact path="/" render={(rp)=> <Home {...rp}/>} />
      <Route exact path='/rooms' render={(rp)=> <Rooms {...rp}/>}/>
      <Route exact path="/rooms/:roomId" render={(rp)=> <SingleRoom {...rp} room={getRoom(rp.match.params.roomId)}/>} />
      <Route exact path="/pool" render={(rp)=> <Pool {...rp}/>} />
      <Route exact path="/events" render={(rp)=> <Events {...rp}/>} />
      <Route exact path="/contact" render={(rp)=> <Contact {...rp}/>} />
      <Route  path="/" render={(rp)=> <h3>Error Path</h3>} />
    </Switch>
        </RoomContext.Provider>
      </DispatchContext.Provider>
    <MyFooter/>
    </>
  );
}

export default App;
