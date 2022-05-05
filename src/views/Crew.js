import React, { useEffect, useState } from 'react'
import '../App.css';
import NavBar from '../components/navBar';
import Engineer from '../static/crew/image-anousheh-ansari.png'

export default (props) => {
    return (
        <div id="CrewBkg">
            <NavBar/>
            <h4 id='DestHeader'>
                <span id='darkText'>02</span> MEET YOUR CREW
            </h4>
            <div className='CrewWrap'>
                <div>
                    {props.title}
                    {props.name}
                    {props.desc}
                    <h5>Flight Engineer</h5>
                    <h3>Anousheh Ansari</h3>
                    <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
                        Ansari was the fourth self-funded space tourist, the first self-funded woman to 
                        fly to the ISS, and the first Iranian in space.
                    </p>
                    <div>
                        
                    </div>
                </div>
                <div>
                    {props.crewImg}
                    <img src={Engineer}/>
                </div>
            </div>
        </div>
    )
}

