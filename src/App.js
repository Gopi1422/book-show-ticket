// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import Shows from './components/Shows';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ShowDetails from './components/ShowDetails';
import About from './components/About';

export default class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shows />} />
          <Route path="/about" element={<About />} />
          <Route path="/show-details" element={<ShowDetails />} />
        </Routes>
      </Router>
      </div>
    )
  }
}