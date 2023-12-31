import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

import{
  BrowserRouter as Router,
  Route,
  // Link,
  Routes,
} from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = '#042743 ';
      showAlert("Dark mode enabled","success");
    }
    else{
      setMode("light"); 
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled","success");
    }
  }
  return (
    <>

    {/* <Router>
      <Navbar title ="TextUtils" about = "About" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert = {alert}/>
      <div className="container my-3">
        <Routes>
          <Route path='/about'>
            <About/>
          </Route>

          <Route path='/'>
            <Textform showAlert = {showAlert} heading="Enter the text to analyze"
            mode={mode}></Textform>
          </Route>
        </Routes>
      </div>
      
    </Router> */}
    <Router>
      <Navbar title ="TextUtils" about = "About" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert = {alert}/>
      <div className="container my-3">
        <Routes>
          <Route path='/about' element={<About mode={mode}/>}/>
          <Route path='/' element={<Textform showAlert = {showAlert} heading="Enter the text to analyze"
            mode={mode}/>}/>
        </Routes>
        {/* <Link to="/about">About</Link> */}
      </div>
      
    </Router>

    </>
  );
}

export default App;
