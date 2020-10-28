import React from 'react'
import {Container, Row, Col, Form, Button} from "react-bootstrap"
import {FaFacebookF,FaInstagram} from "react-icons/fa"
import {Link} from "react-router-dom"

function MyFooter() {
    return (
        <footer className=" text-center  py-4">
            <hr/>
            <Container className="p-4">
                <Row>
                    <Col md={5}>
                        <Row>
                            <Col md={6}>
                                <h4 className="lead my-4">Danilo 2020 &copy;</h4>
                               <Link to="/"> <FaFacebookF/></Link> <Link to="/"><FaInstagram/></Link>
                            </Col>
                            <Col md={6}>
                                <Row>
                                    <Col md={6}>
                                        <h4>Properties</h4>
                                        <p>Austin</p>
                                        <p>Phoenix</p>
                                        <p>Memphis</p>
                                        <p>Austin</p>
                                        <p>Denver</p>
                                    </Col>
                                    <Col md={6}>
                                        <h4>Info</h4>
                                        <p>Carrers</p>
                                        <p>Privacy</p>
                                    </Col>

                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3}/>
                    <Col md={4}>
                        {/* form goes here */}
                        <Form>
                            <Form.Group>
                                <Form.Label ><h4>Sign Up Newsletter</h4></Form.Label>
                                <Form.Control type="email" placeholder="Enter email"/>
                            </Form.Group>
                            <Button>Submit</Button>
                        </Form>

                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default MyFooter
