const Razorpay = require("razorpay");
const Order = require("../../modal/orderModal");
const Cart = require("../../modal/cartModal");
const User = require("../../modal/userModal");
const crypto = require("crypto");

// Razorpay instance
var instance = new Razorpay({
  key_id: "rzp_test_RKYn4vqfQCM98B",
  key_secret: "BvraDnlZVqhbeAjzRbvXpyvB",
});

// ================== CREATE ORDER ==================
const createOrder = async (req, res) => {
  try {
    let totalAmount = req.body.totalAmount;

    var options = {
      amount: totalAmount * 100, // amount in paise
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    let order = await instance.orders.create(options);
    res.status(200).json({ order });
  } catch (err) {
    console.error("Error creating order:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ================== VERIFY PAYMENT ==================
const verifyPayment = async (req, res) => {
  try {
    let getUser = await User.findOne({ email: req.user });
    if (!getUser) return res.status(404).json({ message: "User not found" });
    let userId = getUser._id;

    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      billingAddress,
      totalAmount,
    } = req.body;

    // Step 1: Verify payment signature
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_SECRET || "BvraDnlZVqhbeAjzRbvXpyvB"
      )
      .update(sign.toString())
      .digest("hex");

    if (expectedSign !== razorpay_signature) {
      return res.status(400).json({ message: "Invalid payment signature" });
    }

    // Step 2: Check if order already exists
    const existingOrder = await Order.findOne({
      user: userId,
      "history.razorpay_order_id": razorpay_order_id,
    });

    if (existingOrder) {
      return res.status(200).json({
        message: "Order already exists",
        order: existingOrder,
      });
    }

    // Step 3: Insert new order history
    const order = await Order.findOneAndUpdate(
      { user: userId },
      {
        $setOnInsert: { user: userId },
        $push: {
          history: {
            razorpay_order_id,
            razorpay_payment_id,
            billingAddress,
            totalAmount,
            paymentStatus: "Success",
          },
        },
      },
      { new: true, upsert: true }
    );

    // Step 4: Clear cart
    await Cart.findOneAndUpdate(
      { user: userId },
      { $set: { items: [] } },
      { new: true }
    );

    return res.status(200).json({
      message: "Payment verified, order saved & cart cleared",
      order,
    });
  } catch (err) {
    console.error("Error verifying payment:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ================== GET USER ORDERS ==================
const getOrders = async (req, res) => {
  try {
    let getUser = await User.findOne({ email: req.user });
    if (!getUser) return res.status(404).json({ message: "User not found" });

    let orders = await Order.findOne({ user: getUser._id });

    res.status(200).json({
      message: "Orders fetched successfully",
      orders,
    });
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createOrder,
  verifyPayment,
  getOrders,
};
