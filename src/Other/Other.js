import React, {useState} from 'react'
import  OtherPDF from "./OtherPDF"
import './Other.css'
// files import 
import post_year_letter from "./Other-files/Others-APOS-1-Year-MD-letter.docx"
import not_seen_letter from "./Other-files/Others-APOS-Not-Seen-MD-letter.docx"
import seen_letter from "./Other-files/Others-APOS-Seen-MD-letter.docx"
import excuse_letter from "./Other-files/Others-Excuse-Letter.docx"
import checklist from "./Other-files/Others-APOS-Checklist.pdf"
import fitting from "./Other-files/Others-APOS-Fitting-SO.pdf"
import fitting_S from "./Other-files/Others-APOS-Fitting-SO-S.pdf"
import apos_beneficiary from "./Other-files/Others-APOS-HF-Acknowledgement.pdf"
import pt_beneficiary from "./Other-files/Others-PTOT-HF-Acknowledgement.pdf"
import pt_beneficiary_S from "./Other-files/Others-PTOT-HF-Acknowledgement-Spanish.pdf"
import directAccess from "./Other-files/Others-DA.pdf"
import directAccess_S from "./Other-files/Others-DA-S.pdf"
import financialH from "./Other-files/Others-FH.pdf"
import financialH_S from "./Other-files/Others-FH-S.pdf"

// image import 
import from ""
import from ""
import from ""
import from ""
import from ""
import from ""
import from ""
import from ""
import from ""
import from ""
import from ""
import from ""
import from ""
import from ""

function Other() {
  return (
    <div className="bg-gray-100 w-fill h-screen">
    <div className="Prompt">
          <p className="p-10 font-semibold text-gray-600 text-3xl text-center">
            Single page PDF's, APOS forms, MD letter layouyts and more can be found here in both english and spanish.
          </p>
    </div>  



      <OtherPDF />
      
    </div>
  )
}

export default Other