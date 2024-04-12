import { useState } from "react";
import axios from "axios";
import Sidebar from "./sidebar.jsx";
import {Userdata, Postdata} from "../connector.js"

export default function Postbox({ PostID }) {
    const postdata = Postdata(PostID);
    const userdata = Userdata(postdata.userId);

  return (
    <>
      <div className="head">
        <img src="" alt="" />
        <span className={Style.Name}></span>
      </div>
    </>
  );
}
