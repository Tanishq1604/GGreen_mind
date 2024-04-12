import { useState } from "react"
import axios from "axios";
import Sidebar from "./sidebar.jsx";
export default function Dashboard(){

    
    async function checkoutHandler(){
        const {data:{key}}=await axios.get('http://localhost:4040/api/getKey')
        const {data:{order}}= await axios.post("http://localhost:4040/api/check",{
            amount:'500'
        })
        console.log(key)

        
        var options = {
            key, // Enter the Key ID generated from the Dashboard
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Green minds", //your business name
            description: "Test Transaction",
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: "http://localhost:4040/api/payment",
            image :"https://example.com/your_logo",
            prefill: { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                name: "Gaurav Kumar", //your customer's name
                email: "gaurav.kumar@example.com",
                contact: "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#3399cc"
            }
        };
        const rzp1 = new window.Razorpay(options);
      
           rzp1.open();
    

    
    }
    return(
        <>
        <Sidebar/>
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
              <span class="material-icons-outlined"><i class="fa-solid fa-thumbs-up"></i></span>
            </div>
            <h1>4,021</h1>
          </div>

          <div class="card">
            <div class="card-inner">
              <h2>KARMA POINTS</h2>
              <span class="material-icons-outlined"><i class="fa-solid fa-coins"></i></span>
            </div>
            <h1>8,731</h1>
          </div>

          <div class="card">
            <div class="card-inner">
              <h2>FOLLOWERS</h2>
              <span class="material-icons-outlined"><i class="fa-solid fa-user-plus"></i></span>
            </div>
            <h1>3,841</h1>
          </div>

          <div class="card">
            <div class="card-inner">
              <h2>COMMENTS</h2>
              <span class="material-icons-outlined"><i class="fa-solid fa-comment"></i></span>
            </div>
            <h1>1,962</h1>
          </div>

        </div>
        <div className="dashboard-latest-post">
            <h1>Latest Post</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veniam nesciunt aspernatur aperiam quam sapiente modi ad, explicabo, consectetur maxime animi dicta placeat! Eligendi tempore officiis nihil dolore debitis vel!

        </div>
        </div>
    </>
    )
}