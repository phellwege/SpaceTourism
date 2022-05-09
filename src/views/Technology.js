import React, { useEffect, useState } from 'react'
import '../App.css';
import NavBar from '../components/navBar';
import data from '../Data/data';


export default () => {
    const [index,setIndex]=useState(0);
    const tech = require('../static/technology/'+ data.technology[index].images.portrait +'.jpg');
    return (
        <div id="TechBkg">
            <NavBar  active={3}/>
            <h4 id='DestHeader'>
                <span id='darkText'>03</span> SPACE LAUNCH 101
            </h4>
            <div className='TechWrap'>
                <div className='TechLeft'>
                    <div>
                        <div className="technology-buttons">
                            <button className={"technology-button" + (index===0?" active-technology":"")} onClick={() => {setIndex(0)}}>
                                1
                            </button>
                            <button className={"technology-button" + (index===1?" active-technology":"")} onClick={() => {setIndex(1)}}>
                                2
                            </button>
                            <button className={"technology-button" + (index===2?" active-technology":"")} onClick={() => {setIndex(2)}}>
                                3
                            </button>
                        </div>
                    </div>
                    <div>
                        <p>The Terminology...</p>
                        <h3>{data.technology[index].name}</h3>
                        <p>{data.technology[index].description}</p>
                    </div>
                </div>
                <div>
                <img className="technology-image" src={tech} alt="technology" />
                </div>
            </div>
        </div>
    )
}

