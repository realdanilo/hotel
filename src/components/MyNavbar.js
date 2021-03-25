import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'

const MyNavbar = () => {
    return (
        <Navbar variant="dark" expand="lg"  className="custom-bg" collapseOnSelect    >
          <Container>

          <LinkContainer to="/">
            <Navbar.Brand >PHOENIX ONE</Navbar.Brand>
          </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto" justify>
                <LinkContainer to="/rooms">
                  <Nav.Link>Rooms</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/pool">
                  <Nav.Link >Pool</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/events">
                  <Nav.Link >Events</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <Nav.Link >Contact</Nav.Link>
                </LinkContainer>
              </Nav>
          </Navbar.Collapse> 
          </Container>
        </Navbar>
    )
}

export default MyNavbar
