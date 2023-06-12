import {Routes, Route} from "react-router-dom"
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
