import React from 'react'
import './Undermeny.css';
import MenyknappUndermeny from './MenyknappUndermeny'

import bild1 from'./img-undermeny/bottenmeny1.jpg'

import bild2 from './img-undermeny/bottenmeny2.png'
import bild3 from './img-undermeny/bottenmeny3.png'
import bild4 from './img-undermeny/bottenmeny4.png'
import bildMitten from './img-undermeny/bottenmenymittknapp.png'


export default function undermeny() {
    return (
        <div className="hela-undermenyn">
            < MenyknappUndermeny bild={bild1} height="70" width="70"/>
            < MenyknappUndermeny bild={bild2} height="70" width="70"/>
            < MenyknappUndermeny bild={bildMitten} height="95" width="95"/>
            < MenyknappUndermeny bild={bild3} height="70" width="70"/>
            < MenyknappUndermeny bild={bild4} height="70" width="70"/>

        </div>
    )
}
