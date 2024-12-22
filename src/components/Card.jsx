import React from 'react'
import PropTypes from "prop-types"

const Card = ({imgSrc,title,desc}) => {
  return (
    <div style={{padding:"5px",display:"flex",alignItems:"center",flexDirection:"column",margin:"10px 10px",border:"2px solid black",borderRadius:"10px",flexWrap:"wrap",boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.3)"}}>
        <img width={150} src={imgSrc} alt="img" />
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}

Card.propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
}

export default Card