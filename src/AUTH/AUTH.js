import React, {useState} from 'react';
import "./Auth.css";
import AuthPDF from "./AUTHPDF";
// pdf files
import metroplus from "./Auth-files/Auth-MetroPlus.pdf";
import empire from "./Auth-files/Auth-Empire.pdf";
import orthonet from "./Auth-files/Auth-Orthonet.pdf";
import palladian from "./Auth-files/Auth-Palladian.pdf";

// import images
import metroplusImg from "./Auth-Images/Auth-MetroPlus.jpg";
import empireImg from "./Auth-Images/Auth-Empire.jpg" ;
import orthonetImg from "./Auth-Images/Auth-Orthonet.jpg";
import palladianImg from "./Auth-Images/Auth-Palladian.jpg";

function AUTH() {

const authArr = [
    
    { 
      "id" : 1,
    "PDF_path": metroplus,
    "imgPath": metroplusImg,
    "imgAlt": "MetroPlus Auth form"
    }, 

    {
      "id" :2 , 
      "PDF_path": empire,
      "imgPath": empireImg,
      "imgAlt": "Empire Auth Form"
    }, 

    {
      "id" :3 ,
      "PDF_path": orthonet,
      "imgPath": orthonetImg,
      "imgAlt": "Orthonet Auth Form"
    },

    {
      "id" :4 ,
      "PDF_path": palladian,
      "imgPath": palladianImg,
      "imgAlt": "Palladian Auth Form"
    }
];

  const [arr, setArr] = useState(authArr)

console.log(setArr)

  return (
    <div className="auth bg-gray-100 w-fill h-screen">
          <div className="Prompt">
          <p className="p-10 font-semibold text-gray-600 text-3xl text-center">
            Authorization PDF's available below, Orthonet, MetroPlus and more.
          </p>
    </div> 
    <div className="container">
  <div className="grid flex justify-center">
 { arr.map((arr) => (
  <AuthPDF key={arr.id} arr={arr} />
 ))}
    </div>
    </div>
    </div>
  )
}

export default AUTH

