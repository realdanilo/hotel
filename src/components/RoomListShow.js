import React from 'react'
import OneRoomCard from "./OneRoomCard"
import {Row, Col} from "react-bootstrap"

const RoomListShow = ({rooms}) => {
    return (
        <Row>
           {rooms && rooms.map((x,idx)=> (
               <Col className="p-3" md={6} key={idx}>
                <OneRoomCard toLink={x.slug} backgroundImg={x.images[0]} name={x.name} price={x.price} />
               </Col>
           ))}
           {rooms.length ==0 && <p className="display-3">No rooms match</p>}
        </Row>
    )
}

export default RoomListShow
