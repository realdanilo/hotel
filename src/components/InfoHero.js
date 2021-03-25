import React from 'react'
import {Link} from "react-router-dom"

const InfoHero = ({toLink, toName, backgroundImage}) => {
    const style={
        background:`url(${backgroundImage})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        width:"100%",
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
    return (
            <Link className="InfoHero" to={`/info/${toLink}`} style={{textDecoration:"none"}}>
                <div style={style}>
                        <div  size="lg" className="InfoHeroBtn">
                            {toName}
                        </div>
                </div>
            </Link>
    )
}

export default InfoHero
