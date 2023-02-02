import './App.css';
import Navbar from './Components/navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [current, setTheme] = useState('dark');
const [alert, setAlert] = useState(null);

const showAlert=(message,type)=>{
setAlert({
  msg: message,
  type:type
})
}

  const toggleTheme=()=>{
  
  if (current==='dark'){
      setTheme('light');
      document.body.style.backgroundColor = "#191b1d";
      showAlert("Dark Mode has been enabled","success");
   
      setTimeout(() => {
        setAlert(null);
      }, 2000);
      document.title = "TextUtils-Dark Mode";


      
    }
    if (current==='light'){
      setTheme('dark');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled","success");
      setTimeout(() => {
        setAlert(null);
      }, 2000);
      document.title = "TextUtils-Home";

  }
  
  }
    
  return (
    <>
    <Router>
    <Navbar title='TextUtils' current={current} toggleTheme={toggleTheme}></Navbar>
    <Alert alert={alert} showAlert={showAlert} ></Alert>

    <Routes>
        <Route path="/" element={<TextForm current={current} toggleTheme={toggleTheme}></TextForm>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>

      </Router>
    </>
  );

}

export default App;
