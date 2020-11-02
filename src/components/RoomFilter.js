import React, {useContext, useState} from 'react'
import {Form } from "react-bootstrap"
import {RoomContext, DispatchContext} from "../utils/context"

const findUnique = (items,type)=>{
    return [...new Set(items.map(x=> x[type]))]
}

const RoomFilter = ({rooms}) => {
    const state = useContext(RoomContext)
    const dispatch = useContext(DispatchContext)
    const {type, capacity, minPrice, maxPrice, minSize, maxSize, size, price, breakfast,pets} = state
    const roomTypeUnique = findUnique(rooms, "type").concat("all")
    const numberOfGuess = findUnique(rooms,"capacity")



    const handleChange = e =>{
        const target = e.target
        console.log(e.target.type)
        const value = target.type === "checkbox" ? target.checked : target.value
        console.log(value)
        const name = target.name
        let newFilter = {[name]:value}
        console.log(newFilter)
        dispatch({type:"UPDATE", newFilter})
        dispatch({type:"FILTER"})
    }
    return (
        <>
           <Form>
                {/* Room type */}
                <Form.Group controlId="roomType">
                    <Form.Label>Room Type</Form.Label>
                        <Form.Control size="sm" as="select" value={type} name="type" onChange={(e)=> handleChange(e)}>
                        {roomTypeUnique.map((opt,idx)=> <option key={idx}>{opt}</option>)}
                    </Form.Control>
                </Form.Group>
                {/* Number of Guess */}
                <Form.Group controlId="guess">
                    <Form.Label>Number of Guess</Form.Label>
                        <Form.Control size="sm" as="select" name="capacity" value={capacity} onChange={(e)=> handleChange(e)}>
                            {numberOfGuess.map((item,idx)=> <option key={idx}>{item}</option>)}
                    </Form.Control>
                </Form.Group>
                {/* Room Price */}
                <Form.Group controlId="roomPrice">
                    <Form.Label>Price: ${price}</Form.Label>
                        <Form.Control type="range" step={1} name="price" max={maxPrice} min={minPrice} value={price} onChange={(e)=> handleChange(e)}>
                    </Form.Control>
                </Form.Group>
                {/* Room Size */}
                <Form.Group controlId="roomSize1">
                    <Form.Label>Min Room size</Form.Label>
                        <Form.Control type="number" step={10} min={0} name="minSize" value={minSize} onChange={(e)=> handleChange(e)}>
                    </Form.Control>
                </Form.Group>
                {/* Room Size */}
                <Form.Group controlId="roomSize2">
                    <Form.Label>Max Room size</Form.Label>
                        <Form.Control type="number" step={10} name="maxSize" value={maxSize} max={10000} onChange={(e)=>handleChange(e)}>
                    </Form.Control>
                </Form.Group>
                
                {/* Pets && Breakfast  */}
                { <Form.Check 
                    type="switch"
                    id="pets"
                    label="Pets"
                    name="pets"
                    checked={pets}
                    onChange={(e)=>handleChange(e)}
                />}
                { <Form.Check 
                    type="switch"
                    id="breakfast"
                    label="Breakfast"
                    name="breakfast"
                    checked={breakfast}
                    onChange={(e)=>handleChange(e)}
                />}
            </Form>
             
        </>
    )
}

export default RoomFilter
