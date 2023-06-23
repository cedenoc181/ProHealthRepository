import React, {useState} from 'react';
import "./APOS.css";
import APOSPDF from "./APOSPDF";
// APOS pdf
import post_one_E from "./APOS-files/APOS-1-Year-intake-E.pdf"
import post_one_S from "./APOS-files/APOS-1-year-intake-S.pdf"
import checklist from "./APOS-files/APOS-Checklist.pdf"
import APOS_Eval_E from "./APOS-files/APOS-Eval-E.pdf"
import APOS_Eval_S from "./APOS-files/APOS-Eval-S.pdf"
import fitting_SO_S from "./APOS-files/APOS-Fitting-SO-S.pdf"
import fitting_SO from "./APOS-files/APOS-Fitting-SO.pdf"
import follow_up from "./APOS-files/APOS-FU-Questionaire.pdf"
import intake from "./APOS-files/APOS-New-pt-Intake.pdf"
import questionaire from "./APOS-files/APOS-New-pt-Questionaire.pdf"
import puso from "./APOS-files/APOS-PUSO.pdf"
import tp from "./APOS-files/APOS-TP.pdf"
import beneficiary from "./APOS-files/HF-APOS-Acknolwdgement.pdf"

// APOS image cover
import post_one_E_cover from "./APOS-Images/APOS-1-year-intake-E-cover.jpg"
import post_one_S_cover from "./APOS-Images/APOS-1-year-intake-S-cover.jpg"
import checklist_cover from "./APOS-Images/APOS-Checklist-cover.jpg"
import APOS_Eval_E_cover from "./APOS-Images/APOS-Eval-E-cover.jpg"
import APOS_Eval_S_cover from "./APOS-Images/APOS-Eval-S-cover.jpg"
import fitting_SO_S_cover from "./APOS-Images/APOS-Fitting-SO-S.jpg"
import fitting_SO_cover from "./APOS-Images/APOS-Fitting-SO.jpg"
import follow_up_cover from "./APOS-Images/APOS-FU-Questionaire-cover.jpg"
import intake_cover from "./APOS-Images/APOS-New-pt-Intake-E.jpg"
import questionaire_cover from "./APOS-Images/APOS-New-pt-Questionaire-cover.jpg"
import puso_cover from "./APOS-Images/APOS-PUSO-cover.jpg"
import tp_cover from "./APOS-Images/APOS-TP-cover.jpg"
import beneficiary_cover from "./APOS-Images/HF-APOS-Acknowledgement-advisory.jpg"

function APOS() {

  const aposArr = [
    {
      "id": 1,
      "PDF_path": post_one_E,
      "imagePath":post_one_E_cover 
    },
    {
      "id":2,
      "PDF_path": post_one_S,
      "imagePath":post_one_S_cover
    },
    {
      "id":3, 
      "PDF_path":checklist ,
      "imagePath":checklist_cover
    },
    {
      "id":4,  
      "PDF_path":APOS_Eval_E,
      "imagePath":APOS_Eval_E_cover  
    },
    {
      "id": 5,
      "PDF_path":APOS_Eval_S,
      "imagePath":APOS_Eval_S_cover
    },
    {
      "id":6,
      "PDF_path":fitting_SO_S,
      "imagePath": fitting_SO_S_cover
    },
    {
      "id":7,
      "PDF_path":fitting_SO,
      "imagePath": fitting_SO_cover
    },
    {
      "id": 8,
      "PDF_path": follow_up,
      "imagePath": follow_up_cover
    },
    {
      "id": 9,
      "PDF_path": intake,
      "imagePath": intake_cover
    },
    {
      "id": 10,
      "PDF_path": questionaire,
      "imagePath":questionaire_cover
    },
    {
      "id": 11,
      "PDF_path": puso,
      "imagePath":puso_cover
    },
    {
      "id": 12,
      "PDF_path": tp,
      "imagePath": tp_cover
    },
    {
      "id": 13,
      "PDF_path": beneficiary,
      "imagePath": beneficiary_cover
    }
  ];
  

  // try stack overflow solution to map through both arrays at the same time 

  return (
    <div className="apos bg-gray-100 w-fill h-screen" id="APOS">
    <div className="Prompt">
          <p className="p-10 font-semibold text-gray-600 text-3xl text-center">
            APOS Therapy PDF's regarding new patient intakes 
             and post 1 year patient evaluations and more in both english and spanish.
          </p>
    </div>  
        {/* { files.map((file) => {
          return(
        <APOSPDF key={file.index} file={file} />
        );
        })} */}
       <APOSPDF />

    </div>
  )
}

export default APOS