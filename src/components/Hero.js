import React from 'react'
import {Container} from "react-bootstrap"
import Banner from "./Banner"

const Hero = ({backgroundImage,position, children,skew =0}) => {
    const style = {
        height:"85vh",
       backgroundPosition: position || "center",
       backgroundSize:"cover",
       backgroundImage:  backgroundImage || "url(https://arrivehotels.com/wp-content/uploads/2020/08/ARRIVE0045-1.jpg)",
        transform:`skewY(${skew}deg)`,
    }
    return (
        <div style={style}>
            <Container>

        <Banner>{children}</Banner>
            </Container>
            
        </div>
    )
}

Hero.defaultProps ={
}
export default Hero
