import { useState } from "react"
import axios from "axios";

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
        <div className="container">  
        <div className="card">
            <div className="imgBx">
                <img src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png" alt="nike-air-shoe"/>
            </div>

            <div className="contentBx">

                <h2>Nike Shoes</h2>

                <div className="size">
                    <h3>Size :</h3>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                </div>

                <div className="color">

                    <h3>Color :</h3>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <a href="#" onClick={checkoutHandler}>Buy Now</a>
            </div>
            

        </div>
    </div>
    )
}