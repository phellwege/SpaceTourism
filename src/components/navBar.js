import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../App.css';
import logo from '../static/shared/logo.svg'

export default (props) => {
    const navigate=useNavigate();
    const {active}=props;
    return (
        <div id="navBarWrap" className="sticky">
            <div><img src={logo} alt='Logo'/></div>
            <div><p>-------------------------------------</p></div>
            <div id='navBarLinks'>
            <ul >
                <li><a href='/' id='navText' className={"links"+(active===0?" active":"")}><span id='darkText'>00</span> Home</a></li>
                <li><a href='/destination' id='navText'  className={"links"+(active===1?" active":"")}><span id='darkText'>01</span> Destination</a></li>
                <li><a href='/crew' id='navText'  className={"links"+(active===2?" active":"")}><span id='darkText'>02</span> Crew</a></li>
                <li><a href='/tech' id='navText'  className={"links"+(active===3?" active":"")}><span id='darkText'>03</span> Technology</a></li>
            </ul>
            </div>
        </div>
    )
}

