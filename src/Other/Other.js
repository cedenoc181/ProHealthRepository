import React, {useState} from 'react'
import  OtherPDF from "./OtherPDF"
import './Other.css'
// files import 
// import post_year_letter from "./Other-files/Others-APOS-1-Year-MD-letter.docx"
// import not_seen_letter from "./Other-files/Others-APOS-Not-Seen-MD-letter.docx"
// import seen_letter from "./Other-files/Others-APOS-Seen-MD-letter.docx"
// import excuse_letter from "./Other-files/Others-Excuse-Letter.docx"
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
// import post_year_letter_cover from "./Others-Images/Others-APOS-1-year-MD-letter.jpg"
// import not_seen_letter_cover from "./Others-Images/Others-APOS-NOT-Seen-MD-letter.jpg"
// import seen_letter_cover from "./Others-Images/Others-APOS-Seen-MD-letter.jpg"
// import excuse_letter_cover from "./Others-Images/Others-Excuse-Letter.jpg"
import checklist_cover from "./Others-Images/Others-APOS-Checklist-cover.jpg"
import fitting_cover from "./Others-Images/Others-APOS-Fitting-SO.jpg"
import fitting_S_cover from "./Others-Images/Others-APOS-Fitting-SO-S.jpg"
import apos_beneficiary_cover from "./Others-Images/Others-HF-APOS-Acknowledgement.jpg"
import pt_beneficiary_cover from "./Others-Images/Others-PTOT-HF-Acknowledgement.jpg"
import pt_beneficiary_S_cover from "./Others-Images/Others-PTOT-HF-Acknowledgement-Spanish.jpg"
import directAccess_cover from "./Others-Images/Others-DA-E.jpg"
import directAccess_S_cover from "./Others-Images/Others-DA-S.jpg"
import financialH_cover from "./Others-Images/Others-FH-E.jpg"
import financialH_S_cover from "./Others-Images/Others-FH-S.jpg"

function Other() {


const othersArr = [

// {
// "id": 1, 
// "PDF_path": post_year_letter,
// "image_path": post_year_letter_cover,
// "title": "APOS 1 Year MD letter"
// },
// {
//   "id": 2, 
//   "PDF_path": not_seen_letter,
//   "image_path": not_seen_letter_cover,
//   "title": "Not Seen MD letter"
//   },
//   {
//     "id": 3, 
//     "PDF_path": seen_letter,
//     "image_path": seen_letter_cover,
//     "title": "Seen MD letter"
//     },
//     {
//       "id": 4, 
//       "PDF_path": excuse_letter,
//       "image_path": excuse_letter_cover,
//       "title": "Excuse letter"
//       },
      {
        "id": 1, 
        "PDF_path": checklist,
        "image_path": checklist_cover,
        "title": "APOS Checklist"
        },
        {
          "id": 2, 
          "PDF_path": fitting,
          "image_path": fitting_cover,
          "title": "APOS Fitting form"
          },
          {
            "id": 3, 
            "PDF_path": fitting_S,
            "image_path": fitting_S_cover,
            "title": "APOS Fitting form spanish"
            },
            {
              "id": 4, 
              "PDF_path": directAccess,
              "image_path": directAccess_cover,
              "title": "Direct Access form"
              },
              {
                "id": 5, 
                "PDF_path": directAccess_S,
                "image_path": directAccess_S_cover,
                "title": "Direct Access form spanish"
                },
                {
                  "id": 6, 
                  "PDF_path": financialH,
                  "image_path": financialH_cover,
                  "title": "Financial Hardship form "
                  },
                  {
                    "id": 7, 
                    "PDF_path": financialH_S,
                    "image_path": financialH_S_cover,
                    "title": "Financial Hardship form spanish"
                    },
                    {
                      "id": 8, 
                      "PDF_path": apos_beneficiary,
                      "image_path": apos_beneficiary_cover,
                      "title": "APOS Beneficiary form"
                      },
                      {
                        "id": 9, 
                        "PDF_path": pt_beneficiary,
                        "image_path": pt_beneficiary_cover,
                        "title": "therapy beneficiary form"
                        },  
                        {
                          "id": 10, 
                          "PDF_path": pt_beneficiary_S,
                          "image_path": pt_beneficiary_S_cover,
                          "title": "therapy beneficiary form spanish"
                          }
]

const [otherFiles, setOtherFiles] = useState(othersArr)

console.log(otherFiles)

  return (
    <div className="other bg-gray-100 w-fill h-screen">
    <div className="Prompt">
          <p className="p-10 font-semibold text-gray-600 text-3xl text-center">
            Single page PDF's, APOS forms, MD letter layouyts and more can be found here in both english and spanish.
          </p>
    </div>  

{otherFiles.map((other) => (
 <OtherPDF key={other.id} other={other}/>
))}

      
    </div>
  )
}

export default Other