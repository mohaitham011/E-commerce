import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing orders using COD method

const placeOrder = async (req,res) => {
  try {
    const { userId, items, amount, address, paymentMethod } = req.body;

// تحقق من وجود paymentMethod
if (!paymentMethod) {
  return res.json({
    success: false,
    message: "Payment method is required",
  });
}

// إعداد بيانات الطلب
const orderData = {
  userId,
  items,
  address,
  amount,
  paymentMethod, // تأكد من استخدام نفس الاسم
  payment: false,
  date: Date.now(),
};

    const newOrder = new orderModel(orderData);
    await newOrder.save()

    await userModel.findByIdAndUpdate(userId,{cartData:{}});

    res.json({success:true,msg:"Order Placed"})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
  }
}



// All Orders data for admin

const allOrders = async (req,res) => {
  try {
    const orders = await orderModel.find({})
    res.json({success:true,orders})
  } catch (error) {
    console.log(error);
    res.json({success:false,msg:error.message})
  }
}

// All Orders data for frontend

const userOrders = async (req,res) => {
  try {
    const {userId} = req.body;
    const orders = await orderModel.find({userId});
    res.json({success:true,orders});
  } catch (error) {
    console.log(error);
    res.json({success:false,msg:error.message});
  }
}

// update status

const updateStatus = async (req,res) => {
  try {
    const {orderId,status} = req.body
    await orderModel.findByIdAndUpdate(orderId,{status})
    res.json({success:true,msg:'Statue Updated'})
  } catch (error) {
    console.log(error);
    res.json({success:false,msg:error.message});
  }
}

export {placeOrder,allOrders,userOrders,updateStatus}