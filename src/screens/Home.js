import React,{useContext} from 'react'
import Hero from "../components/Hero"
import {Row,Col, Container, Button} from "react-bootstrap"
import InfoHero from "../components/InfoHero"
import infoHeroData from "../infoHeroData"
import OneRoomCard  from "../components/OneRoomCard.js"
import {RoomContext} from "../utils/context"

const Home = () => {
    const state = useContext(RoomContext)
    const {featuredRooms,loading} = state 
    return (
        <div>
            <Hero >
                <div className="nameBanner">
                    <h1 > 
                        Downtown
                    </h1>
                </div>
            </Hero>
            <Container>
                    <h1 style={{textAlign:"center", fontWeight:"200", fontSize:"40px", margin:"100px"}}>Featured Rooms</h1>
                <Row>
                    { featuredRooms.map((x,idx) => (
                    <Col md={6} className="p-3" key={idx}>
                        {/* colum needs p-3 */}
                        <OneRoomCard price={x.price} name={x.name} backgroundImg={x.images[0]} toLink={x.slug} />
                    </Col>
                    ))}
                </Row>
                <div className="m-4">
                    <h2 className="text-center p-4 " style={{color:"#963139", fontSize:"28px",}} >A HOTEL IN THE HEART OF PHOENIX.</h2>
                    <p  className="text-center lead" style={{color:"#963139"}}>Many guest rooms, poolside bar, rooftop cocktail lounge, pop stand and hometown coffee shop.</p>
                </div>
                <Row >
                    {infoHeroData.map((x,idx) => (
                        <Col md={6} key={idx} style={{minHeight:"500px"}} className="p-3">
                            <InfoHero toLink={x.link} toName={x.name} backgroundImage={x.urlImg} variant={x.variant}/>
                        </Col>
                    ))}
                </Row>
            </Container>
            
        </div>
    )
}

export default Home
