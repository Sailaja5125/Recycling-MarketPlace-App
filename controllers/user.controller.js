import UserModel from "../models/UserModel.js";

const createUser = async (req, res) => {
  try {
    const { username, email, mobilenumber, address, materials } = req.body;

    // Create the user document
    const ModelResponse = await UserModel.create({
      username,
      email,
      mobilenumber,
      address,
      materials
    });

    if (!ModelResponse) {
      return res.status(400).json({ message: "User not created" });
    }

    return res.status(201).json({
      message: "User created successfully",
      data: ModelResponse
    });
  } catch (error) {
    // Check for validation errors or duplicate key error
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    if (error.code && error.code === 11000) {
      return res.status(409).json({ message: "Duplicate key error: User already exists" });
    }
    return res.status(500).json({ message: "Internal Server Error"}); 
  }
};


const updateOtp = async (req, res) => {
  try {
    const { requiredOtp } = req.body;
    const { email } = req.headers;

    // Find the user by email
    const userData = await UserModel.findOne({ email });
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the provided OTP matches the generated OTP
    if (requiredOtp !== userData.generatedOtp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // Update the user's rewards
    const newRewards = userData.rewards + 100;
    const updatedData = await UserModel.updateOne({ email }, { $set: { 
      requiredOtp: requiredOtp,
      rewards: newRewards,
    }});

    return res.status(200).json({ message: "Updated Successfully", updatedData });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

const getData = async (req, res) => {
  try {
    const {email} = req.body;
    const user = await UserModel.findOne({ email });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({message: "Internal Server Error"});
  }
}
export { createUser  , updateOtp , getData};