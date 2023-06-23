import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
        setAlert(null);
    }, 1500)
  }

  const togleMode = ()=> {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
      // document.title = 'TextUtils - Dark mode';
    }  
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      // document.title = 'TextUtils - Light mode';
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} togleMode={togleMode} />
      <Alert alert={alert}/>
      <div className="container my-3 ">
        <Routes>
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route><Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try Textutils - Word counter, Character counter, Remove extra spaces " mode={mode}/>}>
            
            </Route>
        </Routes>
      </div>
    </Router>
      </>  
  );
}

export default App;
