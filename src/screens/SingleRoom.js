import React from 'react'
import Hero from "../components/Hero"
import {Container, Row, Col, ListGroup, Image} from "react-bootstrap"

const SingleRoom = ({room}) => {
    const { breakfast, capacity, description, extras, images, name, pets, price, size, type} = room
    const [ image , ...restImages]= images
    console.log(room)
    return (
        <>
            <Hero backgroundImage={`url(${image})`}>
<h1 className="bg-light text-dark display-3 p-3">{name}</h1>
            </Hero>
            <Container className="mt-4">
                {/* images */}
                <Row className="mt-4">
                {restImages.map((img,idx)=> (
                    <Col md={4} key={idx}>
                        <Image className="p-1" fluid  src={img} alt={`image ${idx+1}`} />
                    </Col>
                    ))}
                </Row>
                {/* details and info */}
                <Row className="mt-4">
                    <Col md={8}>
                        <h3 className="display-4 mb-3">Details</h3>
                       <p className="lead">
                           
                            {description}
                           </p>
                    </Col>
                    <Col md={4}>
                        <h3 className="display-4 mb-3">Information</h3>
                        <ListGroup>
                            <ListGroup.Item>Type: {type}</ListGroup.Item>
                            <ListGroup.Item>Price: {price}</ListGroup.Item>
                            <ListGroup.Item>Size: {size}</ListGroup.Item>
                            <ListGroup.Item>Capacity: {capacity}</ListGroup.Item>
                            <ListGroup.Item>Pets: {pets ? "Allowed": "Not Allowed"}</ListGroup.Item>
                            <ListGroup.Item>Breakfast: {breakfast ? "Included": "Not Included"}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                {/* extras */}
                <div className="mt-4">
                <h3 className="display-4">Extra</h3>
                <ul className="list-inline">

                {extras.map((extra,idx)=> (
                    <li className="lead list-inline-item" key={idx}> - {extra}  </li>
                    ))}
                </ul>
                </div>
            </Container>
        </>
    )
}

export default SingleRoom
