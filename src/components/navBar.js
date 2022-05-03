import React, { useEffect, useState } from 'react'
import '../App.css';


export default (props) => {
    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
        setActive(!isActive)
    };
    return (
        <div id="navBarWrap">
            <div>icon</div>
            <div><p>-------------------------------------</p></div>
            <div id='navBarLinks'>
            <ul >
                <li><a href='/' id='navText' className={isActive ? 'Active': null} onClick={ToggleClass}>00 Home</a></li>
                <li><a href='/destination' id='navText'  className={isActive ? 'Active': null} onClick={ToggleClass}>01 Destination</a></li>
                <li><a href='/crew' id='navText'  className={isActive ? 'Active': null} onClick={ToggleClass}>02 Crew</a></li>
                <li><a href='/tech' id='navText'  className={isActive ? 'Active': null} onClick={ToggleClass}>03 Technology</a></li>
            </ul>
            </div>
        </div>
    )
}

