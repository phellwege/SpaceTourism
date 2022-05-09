import React, { useEffect, useState } from 'react';
import '../App.css';
import logo from '../static/shared/logo.svg';
import Hamburger from '../static/shared/icon-hamburger.svg';
import close from '../static/shared/icon-close.svg';

export default (props) => {
        const [navbarOpen, setNavbarOpen] = useState(false)
        const handleToggle = () => {
            setNavbarOpen(prev => !prev)
        }
        const closeMenu = () => {
            setNavbarOpen(false)
        }
    const {active}=props;
    return (
        <div id="navBarWrap" className="sticky">
            <div><a href='/'><img src={logo} alt='Logo'/></a></div>
            <div></div>
            <div id='navBarLinks'>
            <ul >
                <li><a href='/' id='navText' className={"links"+(active===0?" active":"")}><span id='darkText'>00</span> Home</a></li>
                <li><a href='/destination' id='navText'  className={"links"+(active===1?" active":"")}><span id='darkText'>01</span> Destination</a></li>
                <li><a href='/crew' id='navText'  className={"links"+(active===2?" active":"")}><span id='darkText'>02</span> Crew</a></li>
                <li><a href='/tech' id='navText'  className={"links"+(active===3?" active":"")}><span id='darkText'>03</span> Technology</a></li>
            </ul>
            </div>
            <div className='Ham'>
                <nav className="navBar">
                        <button onClick={handleToggle}>{navbarOpen ? (
                        <img src = {close} />
                        ) : (
                        <img src={Hamburger} />
                        )}
                        </button>
                            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                                <li><a class="active" href="/" onClick={() => closeMenu()}><span id='darkText'>00</span> Home</a></li>
                                <li><a href="/destination"  onClick={() => closeMenu()}><span id='darkText'>01</span> Destination</a></li>
                                <li><a href="/crew" onClick={() => closeMenu()}><span id='darkText'>02</span> Crew</a></li>
                                <a href='/tech' onClick={() => closeMenu()}><span id='darkText'>03</span> Technology</a>
                            </ul>
                    </nav>
                </div>
        </div>
    )
}

