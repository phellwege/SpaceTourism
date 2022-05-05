import React, { useEffect, useState } from 'react'
import '../App.css';


export default (props) => {
    return (
        <div>
            <h5 id='title'>Commander</h5>
            <h3 id='name'>Douglas Hurley</h3>
            <p id='desc'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                and former NASA astronaut. He launched into space for the third time as 
                commander of Crew Dragon Demo-2.</p>
            <img src={Engineer} id='crewImg'/>
        </div>
    )
}

