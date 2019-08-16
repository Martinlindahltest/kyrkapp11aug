import React from 'react'
import './Aktivitet.css'

export default function Aktivitet(props) {

    let { beskrivnnig,
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
            Aktivitet
        </div>
    )
}
