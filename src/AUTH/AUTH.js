import React from 'react'
import "./AUTH.css"
import AuthPDF from "./AUTHPDF"

function AUTH() {

  return (
    <div className="bg-gray-100 w-fill h-screen">
          <div className="Prompt">
          <p className="p-10 font-semibold text-gray-600 text-3xl text-center">
            Authorization PDF's available below, Orthonet, MetroPlus and more.
          </p>
    </div> 
<AuthPDF />

    </div>
  )
}

export default AUTH

