import React, { useEffect, useState } from 'react';
import '../App.css';
import navBar from '../components/navBar';

export default () => {
    return (
        <div id="HomeBkg">
            <navBar/>
            <div>
                <div>
                    <h3>So, you want to travel to</h3>
                    <h1>Space</h1>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to <br/> 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax <br/>
                    because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div></div>
            </div>
        </div>
    )
}

