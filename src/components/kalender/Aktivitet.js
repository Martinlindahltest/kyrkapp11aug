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
            <hr/>
            <div className="tidsruta">{tid}</div> 
            <div className="rutaTillHoger">
                <div className="mellanrumMellanTextOchTid"></div>

                {beskrivnig} {prast} {musiker}            
            </div>
            <hr/>
        </div>
    )
}
