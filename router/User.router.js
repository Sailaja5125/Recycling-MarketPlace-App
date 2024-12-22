import express from "express";
import {createUser, getData, updateOtp} from "../controllers/user.controller.js";
import { sendEmail } from "../middleware/Mailer.js";

const router = express.Router()

router.route("/createUser").post(createUser)
router.route("/otp").post(sendEmail)
router.route("/update").post(updateOtp)
router.route("/get").post(getData)

export default router;