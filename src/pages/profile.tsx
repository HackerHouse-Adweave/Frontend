import { useState } from "react";
import Switch from "@mui/material/Switch";
import { IoArrowBackCircle } from "react-icons/io5";
import WebIrys from "@irys/sdk";
import Irys from "@irys/sdk";
// import * as fs from "fs";
// import dotenv from "dotenv";
// dotenv.config();

const label = { inputProps: { "aria-label": "Switch demo" } };

const Profile = () => {

 
//   // Returns a reference to an Irys node
//   const getIrys = async () => {
//     const url = "https://devnet.irys.xyz";
//     // Devnet RPC URLs change often, use a recent one from https://chainlist.org/chain/80001
//     const providerUrl = "";
//     const token = "matic";
//     const privateKey = process.env.PRIVATE_KEY;
  
//     const irys = new Irys({
//       url, // URL of the node you want to connect to
//       token, // Token used for payment
//       key: privateKey, // ETH or SOL private key
//       config: { providerUrl: providerUrl }, // Optional provider URL, only required when using Devnet
//     });
//     return irys;
//   };
 
// const uploadImage = async () => {
// 	const irys = await getIrys();
// 	const fileToUpload = "./myNFT.png";
 
// 	// Get size of file
// 	const { size } = await fs.promises.stat(fileToUpload);
// 	// Get cost to upload "size" bytes
// 	const price = await irys.getPrice(size);
// 	console.log(`Uploading ${size} bytes costs ${irys.utils.fromAtomic(price)} ${token}`);
// 	// Fund the node
// 	await irys.fund(price);
 
// 	// Upload metadata
// 	try {
// 		const response = await irys.uploadFile(fileToUpload);
// 		console.log(`File uploaded ==> https://gateway.irys.xyz/${response.id}`);
// 	} catch (e) {
// 		console.log("Error uploading file ", e);
// 	}
// };

//   const getWebIrys = async () => {
//     const arconnect = window.arweaveWallet;
//     // await arconnect.connect(["ACCESS_ADDRESS", "ACCESS_PUBLIC_KEY", "SIGN_TRANSACTION", "SIGNATURE"]);
//     const webIrys = new WebIrys({ url: "https://node1.irys.xyz", token: "arweave", wallet: { provider: arconnect } });
//     await webIrys.ready();
   
//     return webIrys;
//   };

//   const fundIrysNode = async () => {
//     try{
//       const irys = await getWebIrys();
      
//       console.log(`wallet address = ${irys.address}`);
//       try {
//         const fundTx = await irys.fund(irys.utils.toAtomic(0.00000001));
//         console.log(`Successfully funded ${irys.utils.fromAtomic(fundTx.quantity)} ${irys.token}`);
//       } catch (e) {
//         console.log("Error funding IrysNode ", e);
//       }
//     }catch(err){
//       console.log(err)
//     }
//   }


  const [formData, setFormData] = useState({
    file: "",
    title: "",
    description: "",
    tags: "",
  });

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    alert(
      `File: ${formData.file}, Title: ${formData.title}, description: ${formData.description}, tags: ${formData.tags}`
    );
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
          value={formData.file}
          onChange={handleChange}
        />
        <p>
          <span>Sponsored? </span>
          <Switch {...label} />
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

          <label htmlFor="message">Tagst:</label>
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
