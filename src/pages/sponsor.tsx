import { useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";

const Sponsor = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    alert(
      `Name: ${formData.name}, Email: ${formData.email}, Number: ${formData.number}, Message: ${formData.message}`
    );
  };

  return (
    <>
      <div className="container m-auto mt-8 grid place-items-center font-sans text-xs">
        <a className="w-8 mb-4" href="#/">
          <IoArrowBackCircle className="w-8 h-8" />
        </a>
        <div className="mb-4">
          <p className="text-xl">
            To become a Sponsor, provide all the details below
          </p>
        </div>
        <div className="grid place-items-center">
          <form className="flex flex-col w-96" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              className="border-2 border-solid border-black rounded-lg mb-4 h-8 pl-2"
              placeholder="Name..."
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <label htmlFor="email">Email:</label>
            <input
              className="border-2 border-solid border-black rounded-lg mb-4 h-8 pl-2"
              placeholder="Email..."
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="message">Sponsoring Amount:</label>
            <input
              className="border-2 border-solid border-black rounded-lg mb-4 h-8 pl-2"
              placeholder="Sponsoring Amount..."
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />

            <label htmlFor="message">Media:</label>
            <input
              className="border-2 border-solid border-black rounded-lg mb-4 h-8 pl-2"
              placeholder="Link to Media..."
              id="message"
              name="message"
              value={formData.message}
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
      </div>
    </>
  );
};

export default Sponsor;
