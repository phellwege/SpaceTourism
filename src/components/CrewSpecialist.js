import React, { useEffect, useState } from 'react'
import '../App.css';


export default (props) => {
    return (
        <div>
            <h5 id=''>Flight Engineer</h5>
            <h3 id=''>Anousheh Ansari</h3>
            <p id=''>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
            Ansari was the fourth self-funded space tourist, the first self-funded woman to 
            fly to the ISS, and the first Iranian in space.</p>
            <img src={Engineer} id=''/>
        </div>
    )
}

