import {Routes, Route} from "react-router-dom"
// import {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import Home from "./Home/Home";
import Nav from "./Nav/Nav";
import Auth from "./AUTH/AUTH";
import PTOT from "./PTOT/PTOT";
import APOS from "./APOS/APOS";
import Other from "./Other/Other";

function App() {

// const [aposFiles, setAposFiles] = useState([]);

// useEffect(() => {
//   fetch("http://localhost:3000/APOS")
//   .then(response => response.json())
//   .then(data => setAposFiles(data))
// },[])

console.log();


  return (
    <div className="App">
      <Nav />
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/Auth" element={<Auth />} />

              <Route path="/PTOT" element={<PTOT />} />

              <Route path="/APOS" element={<APOS />} />
             
              <Route path="/Other" element={<Other />} />

            </Routes>
    </div>
  );
}

export default App;
