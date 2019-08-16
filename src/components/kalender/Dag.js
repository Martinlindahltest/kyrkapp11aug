import React from 'react'
import Aktivitet from './Aktivitet';
import './Dag.css'

export default function Dag(props) {

   // console.log(props)


        const arrayAvAktiviteter = props.arrayAvAktiviteter.map( objekt => {
            return <Aktivitet dataObjekt={objekt} />
        })


    return (
        <div className="dagBlock">
            <h3 className="rubrik-vilkendag">{props.vilkenDagObjekt.veckodag} {props.vilkenDagObjekt.datum} {props.vilkenDagObjekt.manad}</h3>
            
            {arrayAvAktiviteter}
            
        </div>
    )
}