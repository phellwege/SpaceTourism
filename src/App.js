import React from 'react';
import { Router } from '@reach/router';
import Home from './views/Home';
import Crew from './views/Crew';
import Tech from './views/Technology';
import Dest from './views/Destination';

import './App.css';
function App() {
  return (
    <div className="App">
      <React.Fragment>
          <Router>
            <Home path="/"/>
            <Crew path='/crew'/>
            <Tech path='/tech'/>
            <Dest path='/destination'/>
          </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
