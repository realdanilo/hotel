import React from 'react'
import {Container} from "react-bootstrap"
import Banner from "./Banner"

const Hero = ({backgroundImage,position, children,skew =0}) => {
    const style = {
        height:"85vh",
       backgroundPosition: position || "center",
       backgroundSize:"cover",
       backgroundImage:  backgroundImage || "url(https://arrivehotels.s3.amazonaws.com/wp-content/uploads/2021/01/08235916/Arrive-Phoenix-433-straightened.jpg)",
        transform:`skewY(${skew}deg)`,
    }
    return (
        <div style={style}>
            <Container>
                <Banner>
                 {children}
                </Banner>
            </Container>
            
        </div>
    )
}

Hero.defaultProps ={
}
export default Hero
