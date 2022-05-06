import React, { useEffect, useState } from 'react'
import '../App.css';
import NavBar from '../components/navBar';
import data from '../Data/data';

export default (props) => {
    const [destination,setDestination] = useState(0);
    return (
        <div id="DestBkg">
            <NavBar active={1}/>
            <h4 id='DestHeader'>
                <span id='darkText'>01</span> Pick your destination
            </h4>
                <div className='DestWrap'>
                    <div>
                        <div id='DestImg'>
                        <img className="destination-image" src={data.destinations[destination].images.webp} alt={data.destinations[destination].name} />
                        </div>
                    </div>
                    <div>
                        <div className='DestNav' >
                            <ul id='navText'>
                                <li className={"destination-option" + (destination===0?" active-destination":"")} onClick={() => {setDestination(0)}}>Moon</li>
                                <li className={"destination-option" + (destination===1?" active-destination":"")} onClick={() => {setDestination(1)}}>Mars</li>
                                <li className={"destination-option" + (destination===2?" active-destination":"")} onClick={() => {setDestination(2)}}>Europa</li>
                                <li className={"destination-option" + (destination===3?" active-destination":"")} onClick={() => {setDestination(3)}}>Titan</li>
                            </ul>
                        </div>
                        <div>
                        <h2>{data.destinations[destination].name}</h2>
                            <p>{data.destinations[destination].description}</p>
                        </div>
                    <div className='DestInfo'>
                        <div>
                            <h5>Avg. distance</h5>
                            <h4>{data.destinations[destination].distance}</h4>
                        </div>
                        <div>
                            <h5>Est. travel time</h5>
                            <h4>{data.destinations[destination].travel}</h4>
                        </div>
                    </div></div>
                </div>
        </div>
    )
}

