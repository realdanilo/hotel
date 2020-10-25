import React from 'react'

const style={
    width:"100wh",
    height:"80vh",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    color:"white",
}
const Banner = ({children}) => {
    return (
        <div style={style}>
           
           {children}
                
        </div>
    )
}

export default Banner
