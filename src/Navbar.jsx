import React from 'react';
import "./App"

function Navbar() {
  return (
    <header>
    <nav>
      <div className="navbar bg-base-100 container mx-auto pt-7">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="lg:hidden flex items-center text-2xl mr-1">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
              </svg>
            </div>
            <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a className="text-base font-normal text-[#150B2BB3]">Home</a></li>
              <li><a className="text-base font-normal text-[#150B2BB3]">Recipes</a></li>
              <li><a className="text-base font-normal text-[#150B2BB3]">About</a></li>
              <li><a className="text-base font-normal text-[#150B2BB3]">Search</a></li>
            </ul>
          </div>
          <a className="text-[#150B2B] text-3xl font-bold">Nadu's<span className="text-[#89db46]">Space</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a className="text-base font-normal text-[#150B2BB3]">Home</a></li>
            <li><a className="text-base font-normal text-[#150B2BB3]">Recipes</a></li>
            <li><a className="text-base font-normal text-[#150B2BB3]">About</a></li>
            <li><a className="text-base font-normal text-[#150B2BB3]">Search</a></li>
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          <label className="input input-bordered items-center gap-2 bg-[#150b2b0d] hidden md:flex">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z"></path>
              <path fill="none" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29 448 448"></path>
            </svg>
            <input type="text" className="grow text-base font-normal text-[#150B2BB3] border-none outline-none" placeholder="Search" spellCheck="false" data-ms-editor="true" />
          </label>
          <a className="btn bg-[#0BE58A] text-2xl md:rounded-[50px]">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className=" mx-auto md:hidden flex">
        <label className="input input-bordered flex items-center gap-2 bg-[#150b2b0d] w-full">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" strokeMiterlimit="10" strokeWidth="32" d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z"></path>
            <path fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29 448 448"></path>
          </svg>
          <input type="text" className="grow text-base font-normal text-[#150B2BB3] border-none outline-none" placeholder="Search" spellCheck="false" data-ms-editor="true" />
        </label>
      </div>
    </nav>
        <div className="p-5 lg:p-32 text-center container banner mx-auto text-white md:rounded-2xl space-y-6 my-2 lg:h-[600px]">
        <h1 className="text-2xl md:text-5xl font-bold max-w-[897px] mx-auto lg:mt-[90px]" >
          <span className="text-primary-color">Discover</span> an exceptional cooking class tailored for you!
        </h1>
        <p className="text-sm md:text-lg md:font-normal max-w-[933px] mx-auto">
          Embark on a Journey to Wellness with <span className="text-[#89db46]">Nadu's Sapce</span>: Your Destination for Wholesome Recipes that Nourish Body and Soul. Discover the Joy of Eating Well, Every Bite Counts!
        </p>
        <div className="space-x-4">
          <button className="btn font-semibold bg-[#0BE58A] px-5 border-none outline-none rounded-[50px]">Explore Now</button>
          <button className="btn font-semibold px-5 rounded-[50px] bg-transparent text-white hover:text-black">Our Feedback</button>
        </div>
      </div>
     </header>
  );
}

export default Navbar;
