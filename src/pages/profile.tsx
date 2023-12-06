import { useState } from "react";
import Switch from "@mui/material/Switch";
import { IoArrowBackCircle } from "react-icons/io5";
import {WebIrys} from "@irys/sdk";
import Irys from "@irys/sdk";

// import * as fs from "fs";
import wallet from "../wallet.json";
import { Button } from "@mui/material";
// import dotenv from "dotenv";
// dotenv.config();

const label = { inputProps: { "aria-label": "Switch demo" } };

const Profile = () => {
  const [formData, setFormData] = useState({
    file: "",
    title: "",
    description: "",
    tags: "",
  });
  const [sponsored, setSponsored] = useState(true);
  const [fileToUpload, setFileToUpload] = useState(new File([], ""));


  const handleSponsored = () => {
    setSponsored(!sponsored);
    console.log("sponsored", !sponsored)
  }

  const upload = async () => {
    try{
      // Connect to a node
      const url = "https://node2.irys.xyz";
      const token = "arweave";
      // const key = JSON.parse(fs.readFileSync("../wallet.json").toString());
      const key = wallet.toString();
      const irys = new Irys({ url, token, key });
      console.log("irys: ",irys)
      
      // Fund the node
        const fundTx = await irys.fund(irys.utils.toAtomic(0.00000001));
        console.log(`Successfully funded ${irys.utils.fromAtomic(fundTx.quantity)} ${irys.token}`);
        // const fundTx = await irys.fund(irys.utils.toAtomic(0.05));
      
      // Tag your uploads
      const tags = [{ name: "application-id", value: "my-tx-sequence" }];
      
      // Upload 10 transactions
      // for (let i = 0; i < 10; i++) {
        const receipt = await irys.upload("GM ", { tags });
        console.log(`Transaction #2 uploaded at ${receipt.timestamp}`);
      // }
    }catch(err){
      console.log("Err in upload: ",err)
    }
  }

  const uploadFile = async () => {
    try{
        const webIrys = await getWebIrys();
        // Your file
        const tags = [{ name: "application-id", value: "MyNFTDrop" }];
       
        try {
          const receipt = await webIrys.uploadFile(fileToUpload, { tags });
          console.log(`File uploaded ==> https://gateway.irys.xyz/${receipt.id}`);
        } catch (e) {
          console.log("Error uploading file ", e);
        }

    }catch(err){
      console.log(err)
    }
  }

  const getWebIrys = async () => {
    const arconnect = window.arweaveWallet;
    // await arconnect.connect(["ACCESS_ADDRESS", "ACCESS_PUBLIC_KEY", "SIGN_TRANSACTION", "SIGNATURE"]);
    const webIrys = new WebIrys({ 
      url: "https://node1.irys.xyz", 
      token: "arweave", 
      wallet: { provider: arconnect } 
    });
    await webIrys.ready();
   
    return webIrys;
  };

  const fundIrysNode = async () => {
    try{
      const irys = await getWebIrys();
      
      console.log(`wallet address = ${irys.address}`);
      try {
        const fundTx = await irys.fund(irys.utils.toAtomic(0.00000001));
        console.log(`Successfully funded ${irys.utils.fromAtomic(fundTx.quantity)} ${irys.token}`);
      } catch (e) {
        console.log("Error funding IrysNode ", e);
      }
    }catch(err){
      console.log(err)
    }
  }




  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if(sponsored){
      upload();
    }else{
    const formData = new FormData();

      if (fileToUpload) {
        // Update the formData object
        formData.append(
            "myFile",
            fileToUpload,
            fileToUpload.name
        );

        // Details of the uploaded file
        console.log(fileToUpload);
        uploadFile();
    }
    }
    // alert(
    //   `File: ${formData.file}, Title: ${formData.title}, description: ${formData.description}, tags: ${formData.tags}`
    // );
  };
  return (
    <>
      <div className="container m-auto grid place-items-center font-sans text-xs mt-8">
        <a className="w-8 mb-4" href="#/">
          <IoArrowBackCircle className="w-8 h-8" />
        </a>
        <label className="text-xl" htmlFor="name">Choose file to Upload:</label>
        <input
          className="mb-4 h-8 pl-28 mt-4"
          type="file"
          id="file"
          name="file"
          onChange={(e) => {
            // const file = e.target.files?.[0];
            if (e.target.files?.length!=undefined) {
              setFileToUpload(e.target.files?.[0]);
            }
          }}
        />
        <p>
          <span>Sponsored? </span>
          <Switch 
            {...label}  
            className="mb-4"
            defaultChecked
            color="primary"
            inputProps={{ "aria-label": "checkbox with default color" }}
            onClick={handleSponsored}
          />
          <br/>
          {
            !sponsored && 
            <Button 
              // variant="contained"
              onClick={fundIrysNode}
            >
              Fund Irys Node
            </Button>
          }
        </p>
        <form className="flex flex-col w-96" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            className="border-2 border-solid border-black rounded-lg mb-4 h-8 pl-2"
            placeholder="Video Title..."
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />

          <label htmlFor="email">Email:</label>
          <textarea
            className="border-2 border-solid border-black rounded-lg mb-4 h-8 pl-2 pt-2"
            placeholder="Video Description..."
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <label htmlFor="message">Tags:</label>
          <input
            className="border-2 border-solid border-black rounded-lg mb-4 h-8 pl-2"
            placeholder="Tags..."
            type="tags"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
          />
          <div className="grid place-items-center">
            <button
              className="border-2 border-solid border-sky-600 bg-sky-200 rounded-lg p-2 uppercase mb-4 hover:bg-sky-500 hover:text-slate-100"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
