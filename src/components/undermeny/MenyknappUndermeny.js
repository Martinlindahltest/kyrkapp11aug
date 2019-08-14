import React from 'react'
import './Undermeny.css';



export default function Menyknapp(props) {


    return (
        <div className="menyknapp-container">
            <img src={props.bild} width={props.width} height={props.height} alt="" />
        </div>
    )
}
