import "./App.css";
import { Navbar } from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Login from "./component/Login";
import Signup from "./component/Signup";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
