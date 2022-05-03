import React, { useEffect, useState } from 'react'
import '../App.css';
import NavBar from '../components/navBar';
import Moon from '../static/destination/image-moon.png'
import DestMoon from '../components/DestMoon';
import DestMars from '../components/DestMars';
import DestTitan from '../components/DestTitan';
import DestEuropa from '../components/DestEuropa';

export default (props) => {

    return (
        <div id="DestBkg">
            <NavBar/>
                <div className='DestWrap'>
                    <div>
                        <h4><span id='darkText'>01</span> Pick your destination</h4>
                        <div id='DestImg'>
                            <img src={Moon}/>
                        </div>
                    </div>
                    <div>
                        <div className='DestNav'>
                            <ul>
                                <li  id='navText' onClick={props.Moon}>Moon</li>
                                <li  id='navText' onClick={props.Mars}>Mars</li>
                                <li  id='navText' onClick={props.Europa}>Europa</li>
                                <li  id='navText' onClick={props.Titan}>Titan</li>
                            </ul>
                        </div>
                        <div>
                        <h2>Moon</h2>
                            <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                            regain perspective and come back refreshed. While you’re there, take in some history 
                            by visiting the Luna 2 and Apollo 11 landing sites.</p>
                        </div>
                    
                    <div className='DestInfo'>
                        <div>
                            <h5>Avg. distance</h5>
                            <h4>384,400 km</h4>
                        </div>
                        <div>
                            <h5>Est. travel time</h5>
                            <h4>3 days</h4>
                        </div>
                    </div></div>
                </div>
        </div>
    )
}

