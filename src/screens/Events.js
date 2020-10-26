import React from 'react'
import  Hero from "../components/Hero"
import {Row,Container, Col} from "react-bootstrap"
import {Link} from "react-router-dom"

const styleBtn={
    color:"white",
    backgroundColor:"black",
    padding:"14px 18px",
    textTransform:"uppercase",
    fontSize:"19px",
}
const Events = () => {
    return (
        <>
          <Hero backgroundImage={"url(https://arrivehotels.com/wp-content/uploads/2020/08/phoenix-private-events-header.jpg)"} >
            <h2 className="bg-light text-dark display-3 p-3">Private Events</h2>    
          </Hero>  
          <Container style={{boxShadow:"0 0 1rem rgba(0, 0, 0, 0.15)"}}>
            <Row style={{marginTop:"-90px"}}>
                <Col md={6} style={{backgroundImage:"url(https://arrivehotels.com/wp-content/uploads/2020/08/phoenix-private-events-1.jpg)", backgroundPosition:"center", backgroundSize:"cover", minHeight:"300px"}}>

                </Col>
                <Col md={6} style={{padding:"70px", backgroundColor:"#FDF4D7"}}>
                    <h1 className="text-black display-3 mb-4">ROOM BLOCKS</h1>
                    <p className="lead">ARRIVE Phoenix is a great place to host your wedding guests. At least the ones you like. Give us some details about your group and we’ll get the conversation started.</p>
                   
                    <div className="mt-5">
                        <Link to="/" style={styleBtn}>Reservations</Link>
                    </div>
                </Col>
                <Col md={6}  style={{padding:"70px", backgroundColor:"#FDF4D7"}}>
                <h1 className="text-black display-3 mb-4">PRIVATE EVENTS</h1>
                <p className="lead">
                When the time is right, your destination for a party, cocktail reception or high-stakes PTA meeting.
                </p>
                <div  className="mt-5">
                    <Link to="/" style={styleBtn}>Reservations</Link>
                </div>
                </Col>
                <Col md={6} style={{backgroundImage:"url(https://arrivehotels.com/wp-content/uploads/2020/08/phoenix-private-events-2.jpg)", backgroundPosition:"center", backgroundSize:"cover", minHeight:"300px"}} >
                </Col>
               
            </Row>
          
        </Container>
        </>
    )
}

export default Events
