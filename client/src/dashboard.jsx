import { useState } from "react";
import axios from "axios";
import { IoGift } from "react-icons/io5";
import Sidebar from "./sidebar.jsx";
import { useNavigate } from "react-router-dom";
import Postbox from "./postbox.jsx";
export default function Dashboard() {
  const navigate = useNavigate();

  
  return (
    <>
      <Sidebar />
      {/* <div className="dashboard-container">
            <div className="dashboard-profile-photo">
                <label htmlFor="dashboard-new-photo">
                    <img src="./images/user-png-icon-young-user-icon-2400.png" alt="" />
                    
                </label>
                <h4>Change the Photo</h4>
            </div>
            <div className="dashboard-container-name">
                <h1>Name of the user : change the name</h1>

            </div>
            <div className="dashboard-container-mail">
                <h1>Gmail : dummymail.com</h1>
            </div>
            <div className="dashboard-container-location">
                <h1>Location : mumbai </h1>
            </div>
            <div className="dashboard-container-posts">
                <button>View All Post </button>
            </div> */}

      {/* <div className="dashboard-profile-photo">
            <label htmlFor="dashboard-profile-photo">
                            <img src="" alt="" id="input-files-img" onChange={changeUrl}/>
                        </label>
                <input type="file" accept="image/jpeg, image/png, image/jpg" id="dashboard-profile-photo" />
                <div className="dashboard-name">Name of user</div>
            </div> */}
      {/* </div> */}
      <div className="dashboard-main">
        <div class="main-title">
          <h1>DASHBOARD</h1>
        </div>

        <div class="main-cards">
          <div class="card">
            <div class="card-inner">
              <h2>LIKES</h2>
              <span class="material-icons-outlined">
                <i class="fa-solid fa-thumbs-up"></i>
              </span>
            </div>
            <h1>4,021</h1>
          </div>

          <div class="card">
            <div class="card-inner">
              <h2>KARMA POINTS</h2>
              <span class="material-icons-outlined">
                <i class="fa-solid fa-coins"></i>
              </span>
            </div>
            <h1>8,731</h1>
          </div>

          <div class="card">
            <div class="card-inner">
              <h2>FOLLOWERS</h2>
              <span class="material-icons-outlined">
                <i class="fa-solid fa-user-plus"></i>
              </span>
            </div>
            <h1>3,841</h1>
          </div>
          <a href="/karma" onClick={navigate("/karma")}>
            <div class="card">
              <div class="card-inner">
                <h2>CLAIM REWARDS</h2>
                <span class="material-icons-outlined">
                  <IoGift />
                </span>
              </div>
              <h1>2,925</h1>
            </div>
          </a>
        </div>
        <Postbox />
        <Postbox />
      </div>
    </>
  );
}
