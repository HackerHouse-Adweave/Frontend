import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Searchbar from "./searchbar";
import Button from "@mui/material/Button";
import colors from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import User from "./user";
import logo from "../Images/logo.png";

const theme = createTheme({
  palette: {
    primary: {
      // light: '#b2ebf2',
      main: "#00acc1",
      // dark: '#00838f',
      // contrastText: '#fff',
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

const Navbar = () => {
  return (
    <>
      <div className="grid place-items-center sticky top-0 h-16 bg-slate-100">
        <div className="mt-3 mb-1 w-full ml-2.5">
          <ul className="flex flex-row no-underline gap-x-4 font-mont text-sm text-sky-500">
            <li className="mr-40 pl-12">
              <a className=" text-2xl font-alternate underline" href="#">
                <img className="w-32 h-12" src={logo} alt="logo" />
              </a>
            </li>
            <li>
              <Searchbar />
            </li>
            <li className="border ml-48 border-solid border-sky-600 mb-3.5 uppercase rounded pt-1.5 px-1.5 hover:bg-sky-500 hover:text-slate-100">
              <a href="#/sponsor/">Sponsor</a>
            </li>
            <li>
              <Button
                sx={{
                  color: "#039be5",
                  border: "1px solid #039be5",
                  fontWeight: "extrabold",
                  fontFamily: "Montserrat, sans-serif",
                  "&:hover": {
                    color: "#eceff1",
                    backgroundColor: "#03a9f4",
                  },
                }}
                variant="outlined"
              >
                Login
              </Button>
            </li>
            <li>
              <User />
            </li>
          </ul>
        </div>
      </div>
      <hr className="h-1 bg-sky-600" />
    </>
  );
};

export default Navbar;
