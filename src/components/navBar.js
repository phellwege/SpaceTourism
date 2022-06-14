import React, { useEffect, useState } from 'react';
import '../App.css';
import logo from '../static/shared/logo.svg';
import Hamburger from '../static/shared/icon-hamburger.svg';
import close from '../static/shared/icon-close.svg';
import { Link } from "react-router-dom";
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
            <div><Link to='/'><img src={logo} alt='Logo'/></Link></div>
            <div></div>
            <div id='navBarLinks'>
            <ul >
                <li><Link to='/' id='navText' className={"links"+(active===0?" active":"")}><span id='darkText'>00</span> Home</Link></li>
                <li><Link to='/destination' id='navText'  className={"links"+(active===1?" active":"")}><span id='darkText'>01</span> Destination</Link></li>
                <li><Link to='/crew' id='navText'  className={"links"+(active===2?" active":"")}><span id='darkText'>02</span> Crew</Link></li>
                <li><Link to='/tech' id='navText'  className={"links"+(active===3?" active":"")}><span id='darkText'>03</span> Technology</Link></li>
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
                                <li><Link class="active" to="/" onClick={() => closeMenu()}><span id='darkText'>00</span> Home</Link></li>
                                <li><Link to="/destination"  onClick={() => closeMenu()}><span id='darkText'>01</span> Destination</Link></li>
                                <li><Link to="/crew" onClick={() => closeMenu()}><span id='darkText'>02</span> Crew</Link></li>
                                <Link to='/tech' onClick={() => closeMenu()}><span id='darkText'>03</span> Technology</Link>
                            </ul>
                    </nav>
                </div>
        </div>
    )
}

