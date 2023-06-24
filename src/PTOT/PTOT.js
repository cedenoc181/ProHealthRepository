import React, {useState} from 'react';
import PTOTPDF from "./PTOTPDF";
import "./PTOT.css";
// ptot files 
import beneficiary_S from "./PTOT-files/PTOT-HF-Acknowledgement-Spanish.pdf"
import beneficiary from "./PTOT-files/PTOT-HF-Acknowledgement.pdf"
import intake from "./PTOT-files/PTOT-Intake-E.pdf"
import intake_S from "./PTOT-files/PTOT-Intake-S.pdf"
import return_intake from "./PTOT-files/PTOT-R-Intake-E.pdf"
import return_intake_S from "./PTOT-files/PTOT-R-Intake-S.pdf"

// ptot images
import beneficiary_S_cover from "./PTOT-Images/PTOT-HF-Acknowledgement-Spanish.jpg"
import beneficiary_cover from "./PTOT-Images/PTOT-HF-Acknowledgement.jpg"
import intake_cover from "./PTOT-Images/PTOT-Intake-E-cover.jpg"
import intake_S_cover from "./PTOT-Images/PTOT-Intake-S-cover.jpg"
import return_intake_cover from "./PTOT-Images/PTOT-R-Intake-E-cover.jpg"
import return_intake_S_cover from "./PTOT-Images/PTOT-R-Intake-S-cover.jpg"

function PTOT() {


const ptotArr = [
  {
    "id": 1,
    "PDF_path": beneficiary,
    "image_path": beneficiary_cover,
    "title": "Therapy beneficiary"
  },
  {
    "id": 2,
    "PDF_path": beneficiary_S,
    "image_path": beneficiary_S_cover,
    "title": "Therapy beneficiary spanish"
  },
  {
    "id": 3,
    "PDF_path": intake,
    "image_path": intake_cover,
    "title": "Therapy intake form"
  },
  {
    "id": 4,
    "PDF_path": intake_S,
    "image_path": intake_S_cover,
    "title": "Therapy intake form spanish"
  },
  {
    "id": 5,
    "PDF_path": return_intake,
    "image_path": return_intake_cover,
    "title": "Therapy return intake form"
  },
  {
    "id": 6,
    "PDF_path": return_intake_S,
    "image_path": return_intake_S_cover,
    "title": "Therapy return intake form spanish"
  }
]

const [ptot, setPtot] = useState(ptotArr)


console.log(ptot)


  return (
<div className="ptot bg-gray-100 w-fill h-screen">

    <div className="Prompt">
          <p className="p-10 font-semibold text-gray-600 text-3xl text-center">
            Physical and Occupational Therapy PDF's regarding new patient intakes 
             and returning patient intakes in both english and spanish.
          </p>
    </div>

  <div className="pdf-display">
 
 {ptot.map((ptForms) => (
 <PTOTPDF key={ptForms.id} pt={ptForms}/>
 ))}
 


   </div>
 </div>
  )
}

export default PTOT