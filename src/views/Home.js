import React, { useEffect, useState } from 'react';
import '../App.css';
import NavBar from '../components/navBar';

export default () => {
    return (
        <div id="HomeBkg">
            <NavBar/>
            <div id='HomeWrap'>
                <div>
                    <h5>So, you want to travel to</h5>
                    <h2>Space</h2>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to <br/> 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax <br/>
                    because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div>
                    <div id='ExploreCircle'>
                        <a href='/'>
                            <h4>Explore</h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

