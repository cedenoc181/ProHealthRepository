import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div className="bg-gray-100 w-fill h-screen">
    <div className=" rounded p-16">
      <p className="p-10 font-semibold text-gray-600 text-3xl shadow-2xl">
        Welcome to Pro Health and Fitness PDF library, This application allows
        therapists and administrative staff to quickly access the documents
        they need. It serves as a centralized repository for all the PDF
        documents needed for clinical operations, such as patient intake
        forms, APOS treatment plans, Direct Access form, APOS follow up
        questionaire and much more.
      </p>
    </div>

    <div className="flex justify-around border-t-2 shadow-xs border-gray-200">
      <div>
      <a href="/PTOT">
        <button className="border border-blue-600 border-2 p-1 text-blue-500 hover:text-blue-800 hover:bg-gray-300 rounded font-semibold cursor-pointer">
          PT OT PDF
        </button>
      </a>
      
      </div>
      <a href="/APOS">
        <button className="border border-blue-600 border-2 p-1 text-blue-500 hover:text-blue-800 hover:bg-gray-300 rounded font-semibold cursor-pointer">
          APOS therapy PDF
        </button>
      </a>
      <a href="/Auth">
        <button className="border border-blue-600 border-2 p-1 text-blue-500 hover:text-blue-800 hover:bg-gray-300 rounded font-semibold cursor-pointer">
          Authorization PDF
        </button>
      </a>
    </div>
    <div className="flex justify-evenly">
      <img
        className="w-250 h-150"
        src={require("../PTimgRBG.png")}
        alt="fdimg"
      />
      <img className="" src={require("../ptimgphfRBG.png")} alt="fdimg2" />
    </div>
  </div>
  )
}

export default Home