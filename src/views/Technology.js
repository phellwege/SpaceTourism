import React, { useEffect, useState } from 'react'
import '../App.css';
import NavBar from '../components/navBar';
import SpaceCraft from '../static/technology/image-launch-vehicle-portrait.jpg'

export default () => {
    return (
        <div id="TechBkg">
            <NavBar/>
            <h4 id='DestHeader'>
                <span id='darkText'>03</span> SPACE LAUNCH 101
            </h4>
            <div className='TechWrap'>
                <div className='TechLeft'>
                    <div>
                        <ul className='TechBtn'>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </div>
                    <div>
                        <h5>The Terminology...</h5>
                        <h3>Launch Vehicle</h3>
                        <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                            payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                            WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                            it's quite an awe-inspiring sight on the launch pad!</p>
                    </div>
                </div>
                <div>
                    <img src={SpaceCraft}/>
                </div>
            </div>
        </div>
    )
}

