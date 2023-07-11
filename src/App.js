import "./App.css";
import { Navbar } from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Login from "./component/Login";
import Signup from "./component/Signup";
import { useState } from "react";
import Alert  from "./component/alert";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type,type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert}/>} />
              <Route path="/about" element={<About showAlert={showAlert}/>} />
              <Route path="/login" element={<Login showAlert={showAlert}/>} />
              <Route path="/signup" element={<Signup showAlert={showAlert}/>} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
