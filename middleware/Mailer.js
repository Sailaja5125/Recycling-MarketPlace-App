import nodemailer from "nodemailer";
import UserModel from "../models/UserModel.js";

export async function sendEmail(req, res) {
  try {
    const { email } = req.headers;

    // Find the user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      console.log("User doesn't exist");
      return res.status(404).send({ message: "User doesn't exist" });
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "992e90ed6af93e",
        pass: "f3f140784059be",
      },
    });

    // Compose the email
    const emailSubject = "Welcome To REcycle";
    const emailContent = `<p>Your OTP is ${user.generatedOtp}</p>`;
    const info = await transporter.sendMail({
      from: "sailajapuvala5125@gmail.com", // sender address
      to: email, // list of receivers
      subject: emailSubject,
      html: emailContent,
    });

    console.log("Message sent", info);
    return res.status(200).send({ message: "Email sent", info });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
}
