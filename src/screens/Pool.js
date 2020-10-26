import React from 'react'
import Hero from "../components/Hero"
import {Col,Row, Container} from "react-bootstrap"
import {Link} from "react-router-dom"



const styleBtn={
    color:"white",
    backgroundColor:"black",
    padding:"14px 18px",
    textTransform:"uppercase",
    fontSize:"19px",
}
const stickyBtn ={
    position:"fixed",
    width:"80px",
    height:"80px",
    backgroundColor:"#FBFAF5",
    bottom:30,
    right:30,
    zIndex:"10",
    borderRadius:"50%",
    textAlign:"center",
    color:"black",
    fontSize:"15px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    boxShadow:"0px 0px 11px rgba(0,0,0,.5)"
}
const Pool = () => {
    return (
        <>
        <Hero backgroundImage={"url(https://arrivehotels.com/wp-content/uploads/2020/08/phoenix-pool-header.jpg)"}>
            <h1 className="bg-light text-dark display-3 p-3">Summer</h1>
        </Hero>
        <Container style={{boxShadow:"0 0 1rem rgba(0, 0, 0, 0.15)"}}>
            <Row style={{marginTop:"-90px"}}>
                <Col md={6} style={{backgroundImage:"url(https://arrivehotels.com/wp-content/uploads/2020/08/phoenix-pool-1.jpg)", backgroundPosition:"center", backgroundSize:"cover", minHeight:"300px"}}>

                </Col>
                <Col md={6} style={{padding:"70px", backgroundColor:"#FDF4D7"}}>
                    <h1 className="text-black display-3 mb-4">TAKE A DIP</h1>
                    <p className="lead">We’ve designed the perfect pool for Phoenix. Our shade structure lets you get as much sun or shade as you want.</p>
                    <p className="lead">Then hit the daybeds with a frosty cocktail and catch up on all that important reading you’ve been meaning to do (yes we are talking about the US Weekly in your purse).</p>
                    <div className="mt-5">
                        <Link to="/" style={styleBtn}>Reservations</Link>
                    </div>
                </Col>
                <Col md={6}  style={{padding:"70px", backgroundColor:"#FDF4D7"}}>
                <h1 className="text-black display-3 mb-4">SIP AND SNACK</h1>
                <p className="lead">
                Lylo Swim Club is our intimate poolside bar led by local cocktail hero Ross Simon, proprietor of Bitter and Twisted Cocktail Parlour and Little Rituals. Lylo offers delicious and refreshing cocktails such as rotating sorbet bellinis, fresh fruit Caipirinhas and a rum-spiked version of the classic Dole Whip. Lylo also features an all-day menu of light, Hawaiian-Japanese influenced bites, such as sushi-grade poke bowls and Mochiko fried chicken.
                </p>
                <div  className="mt-5">
                    <Link to="/" style={styleBtn}>Reservations</Link>
                </div>
                </Col>
                <Col md={6} style={{backgroundImage:"url(https://arrivehotels.com/wp-content/uploads/2020/08/phoenix-pool-2.jpg)", backgroundPosition:"center", backgroundSize:"cover", minHeight:"300px"}} >
                </Col>
                <Col md={6} style={{backgroundImage:"url(https://arrivehotels.com/wp-content/uploads/2020/08/phoenix-pool-3.jpg)", backgroundPosition:"center", backgroundSize:"cover", minHeight:"300px"}}>
                </Col>
                <Col md={6} style={{padding:"70px", backgroundColor:"#FDF4D7"}}>
                    <h1 className="text-black display-3 mb-4">GAME ON</h1>
                    <p className="lead">Yes, there are pink foosball tables. Yes, beating somebody on a pink foosball table feels even better than usual.</p>
                    <p className="lead">No selfies allowed ;)</p>
                    <div  className="mt-5">
                        <Link to="/" style={styleBtn}>Reservations</Link>
                    </div>
                </Col>
            </Row>
           <Link to="/" style={stickyBtn}>
               Book <br/> Now
               </Link>
        </Container>
        </>
    )
}
export default Pool
