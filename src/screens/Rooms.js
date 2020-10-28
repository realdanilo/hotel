import React, {useContext} from 'react'
import {Container, Row, Col, Spinner} from "react-bootstrap"
import RoomFilter from "../components/RoomFilter"
import RoomListShow from "../components/RoomListShow"
import {RoomContext} from "../utils/context"


const Rooms = () => {
    const state = useContext(RoomContext)
    const {rooms, sortedRooms, loading}= state
    if(loading){
        return(
            <>
            <Spinner animation="border" role="status"/> <p className="display-3">Loading...</p>
            </>
        )
    }

    return (
        <Container className="mt-4">
            <Row>
            <Col md={3}>
                <RoomFilter rooms={rooms}/>
            </Col>
            <Col md={9}>
                <RoomListShow rooms={sortedRooms}/>
            </Col>
         
            </Row>
        </Container>
    )
}

export default Rooms
