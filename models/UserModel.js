import mongoose from "mongoose";
import crypto from "crypto";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  mobilenumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  materials: {
    type: Array,
    default: []
  },
  orderdate: {
    type: Date,
    default: Date.now
  },
  generatedOtp:{
    type: String,
    default: ''
  },
  requiredOtp: {
    type: String,
    default: ''
  },
  rewards:{
    type: Number,
    default: 0
  }
}, { timestamps: true });

// Generate OTP before saving the user document
UserSchema.pre('save', function(next) {
  const user = this;
  // Generate a 6-digit OTP
  const otp = crypto.randomInt(100000, 999999).toString();
  user.generatedOtp = otp;
  next();
});
// increase the reward count as soon as the product is registered to sold 
const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
