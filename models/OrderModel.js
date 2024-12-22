import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      item: {
        name: {
          type: String,
          required: true,
        },
        category: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        about: {
          type: String,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  total_price: {
    type: Number,
    required: true,
  },
  order_date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "Pending",
  },
});

export const OrderModel = mongoose.model("Order", OrderSchema);
