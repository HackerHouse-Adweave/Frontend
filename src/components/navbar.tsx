import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Searchbar from "./searchbar";

const Navbar = () => {
  return (
    <>
      <div className="grid place-items-center sticky top-0 h-16 bg-slate-100">
        <div className="">
          <ul className="flex flex-row no-underline gap-x-60 font-sans text-xl">
            <li>
              <a className="uppercase" href="#">AdWeave</a>
            </li>
            <li>
              <Searchbar />
            </li>
            <li>
              <a href="#/upload/">Upload</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
