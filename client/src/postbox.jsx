import { useState } from "react";
import axios from "axios";
import Sidebar from "./sidebar.jsx";
import { FiUpload } from "react-icons/fi";
import { Userdata, Postdata } from "../connector.js";


// export default function Postbox({ PostID }) {
export default function Postbox() {
  // const postdata = Postdata(PostID);
  // const userdata = Userdata(postdata.userId);

  return (
    <>
      <div className="mainbox">
        <div className="head">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-6KqC6o3QC_Cqr9khlI-HDHVJPnWAViS8hGynHYIulA&s" alt="" />
          <span className="Name">juwbe</span>
        </div>
        <p>hbf</p>
        <div className="uploadbox">
          <FiUpload size={30} />
          <br />
          <b>Drag and drop media</b>
          <a href="">Browse File</a>
          <p className="uploadinfo">
            Max size: 50MB <br /> JPG, PNG, GIF, SVG, MP4
          </p>
        </div>
        <div className="bottom">
          <span className="like">Like</span>
          <span className="comment">Comment</span>
          <span className="donation">Donation</span>
        </div>
      </div>
    </>
  );
}
