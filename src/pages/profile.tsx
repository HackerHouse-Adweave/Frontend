import { useState } from "react";
import Switch from "@mui/material/Switch";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Profile = () => {
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
      <div className="container m-auto grid place-items-center font-sans mt-8">
        <label htmlFor="name">Choose file to Upload:</label>
        <input
          className="mb-4 h-12 pl-28 mt-4"
          type="file"
          id="file"
          name="file"
          value={formData.file}
          onChange={handleChange}
        />
        <p><span>Sponsored?  </span><Switch {...label} /></p>
        <form className="flex flex-col w-96" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            className="border-2 border-solid border-black rounded-lg mb-4 h-12 pl-2"
            placeholder="Video Title..."
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />

          <label htmlFor="email">Email:</label>
          <textarea
            className="border-2 border-solid border-black rounded-lg mb-4 h-12 pl-2 pt-2"
            placeholder="Video Description..."
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <label htmlFor="message">Tagst:</label>
          <input
            className="border-2 border-solid border-black rounded-lg mb-4 h-12 pl-2"
            placeholder="Tags..."
            type="tags"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
          />
          <div className="grid place-items-center">
            <button
              className="border-2 border-solid border-sky-600 bg-sky-200 rounded-lg p-2 uppercase mb-4"
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
