import { useState } from "react"
import axios from "axios";
import Sidebar from "./sidebar.jsx";
export default function Karma(){

    
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
      <span style={{ display:"block", fontWeight:"bold", fontSize:"larger", marginTop:"1rem", marginBottom:"1rem", marginLeft: "60%"}}>Total Karma Points: 2925</span>
      <img style={{ width: '50%', height: "auto" , marginLeft: "40%"}} src="https://i.ibb.co/17YXf6c/Screenshot-2024-04-13-080213.png" alt="Screenshot-2024-04-13-080213" border="0"/>

    </>
    )
}