import React from 'react'
import './Aktivitet.css'

export default function Aktivitet(props) {

    let { beskrivnig,
        prast,
        musiker,
        ovrigPersonal,
        datum,
        veckodag,
        titel,
        plats,
        farg,
        tid } = props.dataObjekt;

    return (
        <div className="aktivitetBlock">
            <div className="tidsruta">{tid}</div> 
            <div className="rutaTillHoger">
            {beskrivnig} {prast} {musiker}  
            {beskrivnig} {prast} {musiker}            
            {beskrivnig} {prast} {musiker}            
            {beskrivnig} {prast} {musiker}            
         
            </div>
        </div>
    )
}
