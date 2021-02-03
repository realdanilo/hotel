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
          <Hero backgroundImage={"url(https://arrivehotels.s3.amazonaws.com/wp-content/uploads/2021/01/07000742/dining-2.jpg)"} >
            <h2 className="bg-light text-dark display-3 p-3">Private Events</h2>    
          </Hero>  
          <Container style={{boxShadow:"0 0 1rem rgba(0, 0, 0, 0.15)"}}>
            <Row style={{marginTop:"-90px"}}>
                <Col md={6} style={{backgroundImage:"url(https://arrivehotels.s3.amazonaws.com/wp-content/uploads/2021/01/07001139/ARRIVE0031.jpg)", backgroundPosition:"center", backgroundSize:"cover", minHeight:"300px"}}>

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
                <Col md={6} style={{backgroundImage:"url(https://images.squarespace-cdn.com/content/v1/5f2b4d89daddbf4da1d270ff/1603818811033-MCO1NQ8CUYEGEXELKXY1/ke17ZwdGBToddI8pDm48kKtijf5x5S0rIV7X_qDH3dB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UaZbTVdO5VSPAOxIcVIbmIFLIFeVDbQiz7iBIgNCzklBDD2o6CESiqIlH5ssNFrtmA/Arrive-Phoenix-494.jpg)", backgroundPosition:"center", backgroundSize:"cover", minHeight:"300px"}} >
                </Col>
               
            </Row>
          
        </Container>
        </>
    )
}

export default Events
