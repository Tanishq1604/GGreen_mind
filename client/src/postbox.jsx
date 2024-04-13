import { useState } from "react";
import axios from "axios";
import Sidebar from "./sidebar.jsx";
import { FiUpload } from "react-icons/fi";
import { Userdata, Postdata } from "../connector.js";
import { FaComment, FaDonate } from "react-icons/fa";

export default function Postbox({ PostID }) {
// export default function Postbox() {
  const postdata = Postdata(PostID);
  const userdata = Userdata(postdata.userId);
  async function checkoutHandler() {
    const {
      data: { key },
    } = await axios.get("http://localhost:4040/api/getKey");
    const {
      data: { order },
    } = await axios.post("http://localhost:4040/api/check", {
      amount: "500",
    });
    console.log(key);

    var options = {
      key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Green minds", //your business name
      description: "Test Transaction",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:4040/api/payment",
      image: "https://example.com/your_logo",
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "Gaurav Kumar", //your customer's name
        email: "gaurav.kumar@example.com",
        contact: "9000090000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);

    rzp1.open();
  }

  return (
    <>
      <div className="mainbox" style={{marginLeft:"0px"}}>
        <div className="head">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-6KqC6o3QC_Cqr9khlI-HDHVJPnWAViS8hGynHYIulA&s" alt="" />
          <span className="Name">Nijso</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur saepe repellat doloribus iure dolore sequi, nesciunt repudiandae est quis nulla nam officia ut hic cupiditate voluptates nemo voluptate, recusandae blanditiis?</p>
        <div className="image">
        <img className="pic" src="https://images.unsplash.com/photo-1617303331806-3d6b58e03241?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

        </div>
        <div className="bottom">
          <span className="like">  <i class="fa-solid fa-thumbs-up"></i> Like</span>
          <span className="comment"><FaComment />Comment</span>
         <button className="donation" onClick={checkoutHandler}> <FaDonate />
 Donation</button>
        </div>
      </div>
    </>
  );
}
