import React, { useEffect, useState } from 'react'
import '../App.css';


export default () => {
    return (
        <div id="navBarWrap">
            <ul>
                <li><a href='/' id='navText'>00 Home</a></li>
                <li><a href='/' id='navText'>01 Destination</a></li>
                <li><a href='/' id='navText'>02 Crew</a></li>
                <li><a href='/' id='navText'>03 Technology</a></li>
            </ul>
        </div>
    )
}

