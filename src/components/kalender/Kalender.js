import React from 'react'
import Toppmeny from '../toppmeny/Toppmeny'
import './kalender.css'
import Dag from './Dag';

export default function Kalender() {

    const d = new Date();

    var month = new Array();
        month[0] = "Januari";
        month[1] = "Februari";
        month[2] = "Mars";
        month[3] = "April";
        month[4] = "Maj";
        month[5] = "Juni";
        month[6] = "Juli";
        month[7] = "Augusti";
        month[8] = "September";
        month[9] = "Oktober";
        month[10] = "November";
        month[11] = "December";

const dennaManad = month[d.getMonth()];


const testobjekt = {
    datum: 11,
    veckodag: 'tisdag',
    titel: 'komfimader',
    plats: 'tulinge gård',
    farg: 'blå',
    tid: 11.30
}

    return (
        <div>
            <Toppmeny />
            <section className="kalender-text-container" >
                <h2 className="rubrik-kalender">Kalender</h2>
            </section>

            <section className="valj-manad-och-dag">
                <h3 className="rubrik-manad">{dennaManad}</h3>
                <p className="siffror">1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 </p>
            </section>
            <section>
                <Dag aktiviteter={testobjekt}/>
            </section>
        </div>
    )
}
