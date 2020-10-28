import React from 'react'
import {Link } from "react-router-dom"

const OneRoomCard = ({toLink, backgroundImg, price, name}) => {
    return (
        <Link to={`/rooms/${toLink}`}>
            <div className="OneRoomCard">
                <img src={backgroundImg} alt={`${name} image`}/>
                <p className="OneRoomCard-price">${price}</p>
                <p className="OneRoomCard-name">{name}</p>
            </div>
        </Link>
    )
}

export default OneRoomCard
