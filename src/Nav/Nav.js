import React from 'react'
import "./Nav.css"
// import { NavLink } from "react-router-dom";
import logo from "../prohealth-logo.png";

function Nav() {


  return (
    <div>
 <nav>
      <ul class="flex justify-content-around border-b shadow-lg border-gray-500">
        <div className="mr-5 shadow-sm">
          <a href="https://prohealthptot.com/">
            <img className="w-16 h-16" src={logo} alt="logo" />
          </a>
        </div>
        <li class="mt-6 mr-1">
          <a
            className="active-link bg-white inline-block border-gray-500 rounded-t py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold cursor-pointer"
            href="/"
            id="home"
          >
            Home
          </a>
        </li>
        <li class="mt-6 mr-1">
          <a
            className="active-link bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold cursor-pointer"
            href="/PTOT"
            id="PTOT"
          >
            Physical and Occupational therapy
          </a>
        </li>
        <li class="mt-6 mr-1">
          <a
            className="active-link bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold cursor-pointer"
            href="/APOS"
            id="APOS"
          >
            APOS therapy
          </a>
        </li>
        <li class="mt-6 mr-1">
          <a
            className="active-link bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold cursor-pointer"
            href="/Auth"
            id="Auth"
          >
            Authorization
          </a>
        </li>
        <li class="mt-6 mr-1">
          <a
            className="active-link bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold cursor-pointer"
            href="/Other"
            id="Other"
          >
            Other documents
          </a>
        </li>
        {/* <form class="flex ml-auto">
          <input
            class="mt-6 mr-3 border rounded-md border-gray-500 h-8  p-1 text-left border-2 hover:bg-blue-100 cursor-pointer"
            type="search"
            placeholder="Search PDF..."
          />
        </form> */}
      </ul>
    </nav>




    </div>
  )
}

export default Nav