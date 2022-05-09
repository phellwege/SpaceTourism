import React, { useEffect, useState } from 'react';
import '../App.css';
import NavBar from '../components/navBar';


export default () => {
    return (
        <div id="HomeBkg">
            <NavBar  active={0}/>
            <div id='HomeWrap'>
                <div>
                    <h4>So, you want to travel to</h4>
                    <h2>SPACE</h2>
                    <p>Let’s face it; if you want to go to space, you might as well <br/>genuinely go to 
                    outer space and not hover kind of on the <br/>edge of it. Well sit back, and relax 
                    because we’ll give you<br/> a truly out of this world experience!
                    </p>
                </div>
                <div>
                    <div id='ExploreCircle'>
                        <h4>
                            <a href='/destination'>
                            EXPLORE
                            </a>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

