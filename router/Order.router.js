import express from "express";
import { createOrder , cancelOrder, getOrdersByEmail } from "../controllers/orders.controller.js";
import { upload } from "../middleware/Multer.js";

const router = express.Router();

router.route("/createOrder").post(upload.single("productimage"), createOrder);
router.route("/getOrders").post(getOrdersByEmail)
router.route("/cancelOrder").delete(cancelOrder);



export default router;
