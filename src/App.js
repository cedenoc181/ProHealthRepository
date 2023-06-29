import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from "./Home/Home";
import Nav from "./Nav/Nav";
import Auth from "./AUTH/AUTH";
import PTOT from "./PTOT/PTOT";
import APOS from "./APOS/APOS";
import Other from "./Other/Other";
import { RotatingSquare } from "react-loader-spinner";

function App() {
  // const [aposFiles, setAposFiles] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/APOS")
  //   .then(response => response.json())
  //   .then(data => setAposFiles(data))
  // },[])

  // console.log();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);
  const [isLoading3, setIsLoading3] = useState(true);
  const [isLoading4, setIsLoading4] = useState(true);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2300);
    } 
  }, [isLoading]);

  useEffect(() => {
    if (isLoading2) {
      setTimeout(() => {
        setIsLoading2(false);
      }, 2300);
    } 
  }, [isLoading2]);

  useEffect(() => {
    if (isLoading3) {
      setTimeout(() => {
        setIsLoading3(false);
      }, 2300);
    } 
  }, [isLoading3]);

  useEffect(() => {
    if (isLoading4) {
      setTimeout(() => {
        setIsLoading4(false);
      }, 2300);
    }
  }, [isLoading4]);
  

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/Auth"
          element={
            isLoading ? (
              <RotatingSquare
                height="900"
                width="900"
                color="#1f456e"
                ariaLabel="rotating-square-loading"
                strokeWidth="1"
                wrapperStyle={{}}
                wrapperClass="loader"
                visible={true}
              />
            ) : (
              <Auth />
            )
          }
        />

        <Route path="/PTOT" element={
            isLoading2 ? (
              <RotatingSquare
              height="900"
              width="900"
              color="#1f456e"
              ariaLabel="rotating-square-loading"
              strokeWidth="1"
              wrapperStyle={{}}
              wrapperClass="loader"
              visible={true}
              />
            ) : (
        
        <PTOT />
        )} />

        <Route path="/APOS" element={
            isLoading3 ? (
              <RotatingSquare
              height="900"
              width="900"
              color="#1f456e"
              ariaLabel="rotating-square-loading"
              strokeWidth="1"
              wrapperStyle={{}}
              wrapperClass="loader"
              visible={true}
              />
            ) : (
        
        <APOS />)} />

        <Route path="/Other" element={
            isLoading4 ? (
              <RotatingSquare
              height="900"
              width="900"
              color="#1f456e"
              ariaLabel="rotating-square-loading"
              strokeWidth="1"
              wrapperStyle={{}}
              wrapperClass="loader"
              visible={true}
              />
            ) : (
        
        <Other />)} />
      </Routes>
    </div>
  );
}

export default App;
