import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Searchbar from "./searchbar";
import Button from "@mui/material/Button";
import colors from "@mui/material/colors";
import {createTheme} from "@mui/material/styles";
import User from "./user";


const theme = createTheme({
  palette: {
    primary: {
      // light: '#b2ebf2',
      main: '#00acc1',
      // dark: '#00838f',
      // contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    }
  }
})

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

const Navbar = () => {
  return (
    <>
      <div className="grid place-items-center sticky top-0 h-16 bg-slate-100">
        <div className="">
          <ul className="flex flex-row no-underline gap-x-10 font-mont text-md text-sky-600">
            <li className="mr-36">
              <a className="uppercase text-2xl font-alternate underline" href="#">AdWeave</a>
            </li>
            <li className="pt-1.5">
              <a href="#/sponsor/">Become a Sponsor</a>
            </li>
            <li>
              <Searchbar />
            </li>
            <li>
              <Button sx={{
                color: "#039be5",
                border: "1px solid #039be5",
                fontWeight: "extrabold",
                fontFamily: "Montserrat, sans-serif"
              }} variant="outlined">Login</Button>
            </li>
            <li>
              <User />
            </li>
          </ul>
        </div>
      </div>
      <hr className="h-1 bg-sky-600"/>
    </>
  );
};

export default Navbar;
