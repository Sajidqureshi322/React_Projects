import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import React, { Component } from 'react'
import News from './Components/News';

import{
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <Router>
          <Navbar/>
        <div>
          <Routes>
          <Route path='/' element={<News key='general' pageSize={6} country="in" category="general"/>}/>
          <Route path='/entertainment' element={<News key='entertainment' pageSize={6} country="in" category="entertainment"/>}/>
          <Route path='/technology' element={<News key='technology' pageSize={6} country="in" category="technology"/>}/>
          <Route path='/general' element={<News key='general' pageSize={6} country="in" category="general"/>}/>
          <Route path='/business' element={<News key='business' pageSize={6} country="in" category="business"/>}/>
          <Route path='/science' element={<News key='science' pageSize={6} country="in" category="science"/>}/>
          <Route path='/sports' element={<News key='sports' pageSize={6} country="in" category="sports"/>}/>
          <Route path='/health' element={<News key='health' pageSize={6} country="in" category="health"/>}/>
          
          </Routes>
        </div>
      </Router>
    )
  }
}


