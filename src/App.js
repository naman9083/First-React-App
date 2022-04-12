import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from "./Components/TextForm";
import {
      BrowserRouter as Router,
      Switch,
      Route
}from "react-router-dom";
function App() {
      const [alert,setAlert]=useState(null);
      const showAlert=(message,type)=>{
            setAlert({
                  msg: message,
                  type:type
            })
            setTimeout(()=>{
                  setAlert(null);
            },1900);
            
     }
     const removeBgclass=()=>{
           document.body.classList.remove("bg-dark")
           document.body.classList.remove("bg-light")
           document.body.classList.remove("bg-warning")
           document.body.classList.remove("bg-primary")
           document.body.classList.remove("bg-success")
           document.body.classList.remove("bg-danger")
     }
      const toggleMode = (cls)=>{
            removeBgclass();
            document.body.classList.add('bg-'+cls)
            if(mode==='light'){
                  setMode('dark');
                  document.body.style.backgroundColor='#042743';
                  showAlert("Dark Mode has been enabled","success");
                  // document.title = 'TANZUtils - Dark Mode';
                  // setInterval(()=> {
                  // document.title = 'TANZUtils  is Amazing';
                  // }, 2000);
                  // setInterval(()=> {
                  // document.title = 'Install TANZUtils';
                  // }, 1500);
            }

            else {
                  setMode('light');
                  document.body.style.backgroundColor='white';
                  showAlert("Light Mode has been enabled","success");
                  document.title = 'TANZUtils - Light Mode';
            }
      }
      const [mode,setMode]=useState('light');
  
      
      return (
            <Router>
            <Navbar title = "TANZUtils" toggleMode={toggleMode} mode={mode} aboutText="About Us"></Navbar>
            <Alert alert={alert}/>
            <div className="container my-3">
         <Switch>
                        <Route exact path="/about">
                              <About mode={mode}/>
                        </Route>
                        <Route exact path="/">
                              <TextForm showAlert={showAlert} title = "Enter the Text" mode={mode}/>
                        </Route>
        </Switch>
            </div>
            </Router>
      );
}

export default App;



