import React from 'react'
import Hero from "../components/Hero"
import {Row,Col, Container, Button} from "react-bootstrap"
import InfoHero from "../components/InfoHero"
import infoHeroData from "../infoHeroData"

const Home = () => {
    
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

                <Row className="m-4">
                    <Col>
                    <h2 className="text-center p-4 " style={{color:"#963139", fontSize:"28px",}} >A HOTEL IN THE HEART OF PHOENIX.</h2>
                    <p  className="text-center lead" style={{color:"#963139"}}>Many guest rooms, poolside bar, rooftop cocktail lounge, pop stand and hometown coffee shop.</p>
                    </Col>
                </Row>
                
           
                <Row className="m-3">

                    {infoHeroData.map((x,idx) => (
                        <Col md={6} key={idx} style={{height:"50vh"}} className="p-3">
                            <InfoHero toLink={x.link} toName={x.name} backgroundImage={x.urlImg} variant={x.variant}/>
                        </Col>

                    ))}
                </Row>
            </Container>
            
        </div>
    )
}

export default Home
