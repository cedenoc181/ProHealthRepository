import React from 'react';
import "./APOS.css";
import APOSPDF from "./APOSPDF";

function APOS() {
  return (
    <div className="apos bg-gray-100 w-fill h-screen" id="APOS">
    <div className="Prompt">
          <p className="p-10 font-semibold text-gray-600 text-3xl text-center">
            APOS Therapy PDF's regarding new patient intakes 
             and post 1 year patient evaluations and more in both english and spanish.
          </p>
    </div>  

      <APOSPDF />

    </div>
  )
}

export default APOS