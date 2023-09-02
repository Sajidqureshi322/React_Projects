import './App.css';
import Navbar from './Components/Navbar';
import React,{useState} from 'react'
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import{
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const App=()=> {
  const [progress, setProgress] = useState(0);
    return (
      <Router>
          <Navbar/>
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
        <div>
          <Routes>
          <Route path='/' element={<News setProgress = {setProgress} key='general' pageSize={6} country="in" category="general"/>}/>
          <Route path='/entertainment' element={<News setProgress = {setProgress} key='entertainment' pageSize={6} country="in" category="entertainment"/>}/>
          <Route path='/technology' element={<News setProgress = {setProgress} key='technology' pageSize={6} country="in" category="technology"/>}/>
          <Route path='/general' element={<News setProgress = {setProgress} key='general' pageSize={6} country="in" category="general"/>}/>
          <Route path='/business' element={<News setProgress = {setProgress} key='business' pageSize={6} country="in" category="business"/>}/>
          <Route path='/science' element={<News setProgress = {setProgress} key='science' pageSize={6} country="in" category="science"/>}/>
          <Route path='/sports' element={<News setProgress = {setProgress} key='sports' pageSize={6} country="in" category="sports"/>}/>
          <Route path='/health' element={<News setProgress = {setProgress} key='health' pageSize={6} country="in" category="health"/>}/>
          
          </Routes>
        </div>
      </Router>
    )
}

export default App;
