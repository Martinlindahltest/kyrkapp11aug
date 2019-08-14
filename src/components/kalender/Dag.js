import React from 'react'
import Aktivitet from './Aktivitet';
import './Dag.css'

export default function Dag(props) {

  let { datum, veckodag, titel, plats, farg, tid } = props.aktiviteter;

    return (
        <div className="dagBlock">
            <div>{datum}</div>
        </div>
    )
}
