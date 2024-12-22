import { OrderModel } from "../models/OrderModel.js";
import UserModel from "../models/UserModel.js";
// Create Order
const createOrder = async (req, res) => {
  try {
    const { email, products } = req.body;

    // Calculate total price

    const totalPrice = products.reduce((acc, product) => acc + (product.item.price * product.quantity), 0);

    // Create a new order
    const user = await UserModel.findOne({email})
    if(user.rewards>=totalPrice){
      const newOrder = new OrderModel({
        user: user,
        products,
        total_price: totalPrice,
      });
  
      // Save the order
      await newOrder.save();
  
      // Return response
      res.status(201).json({
        success: true,
        message: 'Order created successfully',
        order: newOrder,
      });

      user.rewards-=totalPrice;
      await user.save();
    }
    else{
      res.status(200).json({
        success: true,
        message: 'Coins are not sufficient',
      });  
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create order',
      error: error.message,
    });
  }
};

// Function to get all orders for a particular email
const getOrdersByEmail = async (req, res) => {
  try {
    const { email } = req.body;

    // Find the user by email
    const user = await UserModel.findOne({ email });
    // If user does not exist
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    // Find all orders for the user
    const orders = await OrderModel.find({ user: user._id });

    // Return response
    res.status(200).json({
      success: true,
      message: 'Orders retrieved successfully',
      orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve orders',
      error: error.message,
    });
  }
};



// Cancel Order
// Cancel Order
const cancelOrder = async (req, res) => {
  try {
    const { orderId, email } = req.body;

    // Find the order by ID
    const order = await OrderModel.findById(orderId);
    
    // Check if the order exists
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found',
      });
    }

    // Update the order status to 'Canceled'
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      orderId,
      { status: 'Canceled' },
      { new: true }
    );

    // Restore rewards to the user
    const user = await UserModel.findOne({ email });
    if (user) {
      user.rewards += order.total_price; // Restore the total price of the canceled order
      await user.save(); // Save updated user rewards
    }

    // Return response
    res.status(200).json({
      success: true,
      message: 'Order canceled successfully',
      order: updatedOrder,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to cancel order',
      error: error.message,
    });
  }
};

export { createOrder, cancelOrder, getOrdersByEmail };
