import React, {Component} from 'react';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Crew from './views/Crew';
import Tech from './views/Technology';
import Dest from './views/Destination';
import './App.css';


function App() {
  return (
    <div className="App">
        <React.Fragment>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/crew" element={<Crew />} />
            <Route exact path="/tech" element={<Tech />} />
            <Route exact path="/destination" element={<Dest />} />
          </Routes>
        </React.Fragment>
    </div>
  );
}

export default App;
