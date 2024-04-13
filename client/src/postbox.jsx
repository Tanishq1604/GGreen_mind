import { useState } from "react";
import axios from "axios";
import Sidebar from "./sidebar.jsx";
import { FiUpload } from "react-icons/fi";
import { Userdata, Postdata } from "../connector.js";


export default function Postbox({ PostID }) {
// export default function Postbox() {
  const postdata = Postdata(PostID);
  const userdata = Userdata(postdata.userId);

  return (
    <>
      <div className="mainbox">
        <div className="head">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-6KqC6o3QC_Cqr9khlI-HDHVJPnWAViS8hGynHYIulA&s" alt="" />
          <span className="Name">{userdata.name}</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur saepe repellat doloribus iure dolore sequi, nesciunt repudiandae est quis nulla nam officia ut hic cupiditate voluptates nemo voluptate, recusandae blanditiis?</p>
        <div className="image">
        <img className="pic" src="https://images.unsplash.com/photo-1617303331806-3d6b58e03241?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

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
