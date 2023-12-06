import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Searchbar from "./searchbar";
import Button from "@mui/material/Button";
import colors from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import User from "./user";
import logo from "../Images/logo.png";
import Arweave from "arweave";

// create arweave client
const arweave = new Arweave({
  host: "ar-io.net",
  port: 443,
  protocol: "https"
});


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
  const [userAddress, setUserAddress] = useState<string | undefined>(undefined);

  const connectWallet = async () => {
    try{
      // connect to the extension
      const res = await window.arweaveWallet.connect(
        // request permissions to read the active address
        ["ACCESS_ADDRESS", "SIGN_TRANSACTION", "DISPATCH", "ACCESS_PUBLIC_KEY", "ACCESS_ALL_ADDRESSES", "ACCESS_ARWEAVE_CONFIG", "SIGNATURE"],
        // provide some extra info for our app
        {
          name: "AdWeave App",
          // logo: "https://arweave.net/jAvd7Z1CBd8gVF2D6ESj7SMCCUYxDX_z3vpp5aHdaYk"
        },
        // custom gateway
        {
          host: "g8way.io",
          port: 443,
          protocol: "https"
        }
      );
      console.log(res);
      const userAddress = await window.arweaveWallet.getActiveAddress();
      console.log(userAddress);
      setUserAddress(userAddress);

    }catch(err){
      console.log(err)
    }

  }

  const disconnectWallet = async () => {
    try{
      // disconnect from the extension
      const res = await window.arweaveWallet.disconnect();
      console.log(res);
      setUserAddress("");
    }catch(err){
      console.log(err)
    }
  }

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
              {
                userAddress?
                  <Button
                  onClick={disconnectWallet}
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
                  {userAddress.slice(0, 5) + "..." + userAddress.slice(-5)}
                </Button>:
                <Button
                  onClick={connectWallet}
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
                  Connect
                  </Button>
              }

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
