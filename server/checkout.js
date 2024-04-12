const Razorpay=require('razorpay');
require('dotenv').config();
async function checkout(req,res){
    const instance= new Razorpay({
        key_id: process.env.KEY_ID,
        key_secret: process.env.KEY_SECRET
      })
    const options={
        amount:Number(req.body.amount*100),
        currency:"INR"
    };
   const order= await instance.orders.create(options);
   console.log(order)
   res.status(200).json({msg:"success",order});

}
async function paymentroute(req,res){
  console.log(req.body);
  res.json({msg:"success"});
 

 
 

}
async function getKey(req,res){
  res.json({key:process.env.KEY_ID})
}


module.exports={checkout,paymentroute,getKey};