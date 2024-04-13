import React, { useState } from 'react';
import axios from "axios";
import Sidebar from "./sidebar.jsx";
import { FiUpload } from "react-icons/fi";
import { Userdata, Postdata } from "../connector.js";
import { Navigate } from 'react-router-dom';


// export default function Postbox({ PostID }) {
export default function Upload() {

  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  // Function to handle text input change
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // Function to handle image upload
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const pic = document.getElementById("imageinput");
    pic.style.backgroundImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Navigate("/explore");
    // You can perform further actions like sending data to server here
    console.log('Text:', text);
    console.log('Image:', image);
  };


  return (
    <>
    <Sidebar/>
      <div className="mainbox">
        <div className="head">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-6KqC6o3QC_Cqr9khlI-HDHVJPnWAViS8hGynHYIulA&s" alt="" />
          <span className="Name">Nijso</span>
        </div>
          <input
          className='textinput'
            type="text"
            id="text"
            placeholder='Enter you Text for post....'
            value={text}
            onChange={handleTextChange}
          />
        <div className="uploadbox" >
        <input
            className='imageinput'
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          <FiUpload size={30} />
          <br />
          <b>Drag and drop media</b>
          <a href="">Browse File</a>
          <p className="uploadinfo">
            Max size: 50MB <br /> JPG, PNG, GIF, SVG, MP4
          </p>
        </div>
        <button className="button">
          <span onClick={handleSubmit}>Submit</span>
        </button>
      </div>
    </>
  );
}
