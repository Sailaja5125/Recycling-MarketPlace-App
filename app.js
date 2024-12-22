import express from "express";
import userRouter from "./router/User.router.js";
import orderRouter from "./router/Order.router.js"
import cors from 'cors'
const app = express()

app.use(cors({
  origin: "*",
  credentials: true,
}));
app.use(express.json())
app.use("/api/user",userRouter)
app.use("/api/order",orderRouter)
export default app
