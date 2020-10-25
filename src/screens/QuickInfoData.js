import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import {Link} from "react-router-dom"
import {FaFacebookF,FaInstagram} from "react-icons/fa"
import  Hero from "../components/Hero"

const btnStyle={
    backgroundColor:"black",
    color:"white",
    padding:"8px 13px",
    fontSize:"15px"
}
const QuickInfoData = ({data}) => {
    const {name, description, urlImg}= data
    let img= urlImg.replace(/['"]+/g, '')
    return (
        <>
           <Hero  backgroundImage={`url(${img})`} position="bottom" />
            <Container style={{marginTop:"50px"}}>
                <Row className="mt-4">
                    
                    <Col md={8}>
                    <h4 className="display-2">{name}</h4>

                        <p style={{whiteSpace:"pre-wrap", padding:"20px", lineHeight:"1.8"}}>{description}</p>
                    </Col>
                    <Col md={4}>
                        <h4>MORE INFO</h4>
                        <p>

                        <Link to="/"><FaInstagram/> Instagram</Link>
                        </p>
                        <p>
                        <Link to="/"><FaFacebookF/> Facebook</Link>
                        </p>
                        <p><Link style={btnStyle} to="/">Menu, Hours & More</Link></p>
                        <p><Link style={btnStyle} to="/">Reservations</Link></p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default QuickInfoData
