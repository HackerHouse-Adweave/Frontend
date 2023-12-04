import React, { useState } from "react";
import {Routes, Route} from "react-router-dom";
import Searchbar from "./searchbar";

const Navbar = () => {
  return (
    <>
      <div className="grid place-items-center h-12">
        <div>
          <ul className="flex flex-row no-underline gap-x-60">
            <li>
              <a href="#">AdWeave</a>
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