import React, { useEffect, useState } from 'react'
import '../App.css';


export default () => {
    return (
        <div id="navBarWrap">
            <div></div>
            <div><p>-------------------------------------</p></div>
            <div id='navBarLinks'>
            <ul>
                <li><a href='#/' id='navText'>00 Home</a></li>
                <li><a href='#/destination' id='navText'>01 Destination</a></li>
                <li><a href='#/crew' id='navText'>02 Crew</a></li>
                <li><a href='#/tech' id='navText'>03 Technology</a></li>
            </ul>
            </div>
        </div>
    )
}

