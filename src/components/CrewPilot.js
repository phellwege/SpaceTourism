import React, { useEffect, useState } from 'react'
import '../App.css';


export default (props) => {
    return (
        <div>
            <h5 id='title'>Flight Engineer</h5>
            <h3 id='name'>Anousheh Ansari</h3>
            <p id='desc'>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
            Ansari was the fourth self-funded space tourist, the first self-funded woman to 
            fly to the ISS, and the first Iranian in space.</p>
            <img src={Engineer} id='crewImg'/>
        </div>
    )
}

