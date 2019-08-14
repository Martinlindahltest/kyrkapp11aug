import React from 'react'
import './toppmeny.css'
import MenyknappToppmeny from './MenyknappToppmeny'

import toppmeny1 from './img-toppmeny/toppmeny1.png'
import toppmeny2 from './img-toppmeny/toppmeny2.png'
import toppmeny3 from './img-toppmeny/toppmeny3.png'
import toppmeny4 from './img-toppmeny/toppmeny4.png'

export default function Toppmeny() {
    return (
        <div className="hela-topmnenyn">
            <MenyknappToppmeny bild={toppmeny1} />
            <MenyknappToppmeny bild={toppmeny2} />
            <MenyknappToppmeny bild={toppmeny3} />
            <MenyknappToppmeny bild={toppmeny4} />
        </div>
    )
}
