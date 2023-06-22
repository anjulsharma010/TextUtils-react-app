import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

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
      document.title = 'TextUtils - Dark mode';
    }  
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - Light mode';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} togleMode={togleMode} />
      <Alert alert={alert}/>
      <div className="container my-3 ">
        <TextForm showAlert={showAlert} heading="Enter The text to analyze below" mode={mode}/>
        {/* <About/> */}
        <div />
      </div>
    </>
  );
}

export default App;
