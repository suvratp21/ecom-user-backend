import express from 'express'
import mongoose from 'mongoose';
import userRouter from './Routes/user.js'
import productRouter from './Routes/product.js'
import cartRouter from './Routes/cart.js'
import addressRouter from './Routes/address.js'
import paymentRouter from './Routes/payment.js'
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config()

const MONGO_URL = process.env.MONGO_URL;

const app = express();

app.use(express.json())

app.use(cors({
  origin:true,
  methods:[ "GET","POST","PUT","DELETE"],
  credentials:true
}))

// home testing route
app.get('/',(req,res)=>res.json({messge:'This is home route'}))

// user Router
app.use('/api/user',userRouter)

// product Router
app.use('/api/product',productRouter)

// cart Router
app.use('/api/cart',cartRouter)

// address Router
app.use('/api/address',addressRouter)

// payment Router
app.use('/api/payment',paymentRouter)

const port = 3001;

mongoose.connect(
  MONGO_URL,{
    dbName:"MERN_E_Commerce"
  }
).then(()=>{
  console.log("MongoDB Connected Successfully...!");
  app.listen(port,()=>console.log(`Server is running on port ${port}`))
}).catch((err)=>{
  console.log("MongoDB Connection Error:", err);
  process.exit(1);
});