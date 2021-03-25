import React from 'react'
import Hero from "../components/Hero"
import {Row, Col, Container } from "react-bootstrap"

const styleBtn={
    color:"white",
    backgroundColor:"black",
    padding:"14px 18px",
    textTransform:"uppercase",
    fontSize:"19px",
}
const Contact = () => {
   
    return (
        <>
        <Hero backgroundImage={"url(https://arrivehotels.s3.amazonaws.com/wp-content/uploads/2021/01/09000449/Arrive-Phoenix-266-2.jpg)"} />
        <Container style={{boxShadow:"0 0 1rem rgba(0, 0, 0, 0.15)"}}>
            <Row style={{marginTop:"-90px"}}>
                
                <Col md={12} style={{padding:"70px", backgroundColor:"#FDF4D7"}}>
                    <h1 className="text-black display-3 mb-4">INFO</h1>
                    <p className="lead">Need Something? Just contact via fax or phone</p>
                    <h3>ADDRESS</h3>
                    <p className="lead">
                        1234 Downton Phoenix 85001
                    </p>
                    <h3>REACH OUT</h3>
                    <p className="lead">
                        <b>Text:</b> 602-111-9090
                    </p>
                    <p className="lead">
                        <b>Email:</b> example@gmail.com
                    </p>
                    <div style={{margin:"40px 0 0 0"}}>
                        <a className="display-5 " target="_blank" rel="noreferrer" href="https://arrivehotels.com/phoenix" style={styleBtn}>Original Website</a>
                    </div>
                   
                   
                </Col>
               
               
            </Row>
          
        </Container>
        </>
    )
}

export default Contact
