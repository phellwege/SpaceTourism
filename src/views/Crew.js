import React, { useEffect, useState } from 'react'
import '../App.css';
import NavBar from '../components/navBar';
import data from '../Data/data';


export default (props) => {
    const [index,setIndex]=useState(0);
    const crew = require('../static/crew/'+ data.crew[index].images.webp + '.webp');
    return (
        <div id="CrewBkg">
            <NavBar  active={2}/>
            <h4 id='DestHeader'>
                <span id='darkText'>02</span> MEET YOUR CREW
            </h4>
            <div className='CrewWrap'>
                <div id='crewLeft'>
                    <h5>{data.crew[index].role}</h5>
                    <h3>{data.crew[index].name}</h3>
                    <p>{data.crew[index].bio}</p>
                    <div id='crewBtn'>
                        <button className={"carousel-button" + (index===0?" active-button":"")} onClick={() => {setIndex(0)}}></button>
                        <button className={"carousel-button" + (index===1?" active-button":"")} onClick={() => {setIndex(1)}}></button>
                        <button className={"carousel-button" + (index===2?" active-button":"")} onClick={() => {setIndex(2)}}></button>
                        <button className={"carousel-button" + (index===3?" active-button":"")} onClick={() => {setIndex(3)}}></button>
                    </div>
                </div>
                <div id='crewRight'>
                    <img className="crew-image" src={crew} alt={data.crew[index].name} />
                </div>
            </div>
        </div>
    )
}

