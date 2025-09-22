const Razorpay = require("razorpay");
const Order = require("../../modal/orderModal")
const User = require("../../modal/userModal")

var instance = new Razorpay({
    key_id: 'rzp_test_RKYn4vqfQCM98B',
    key_secret: 'BvraDnlZVqhbeAjzRbvXpyvB',
});

const createOrder = async (req, res) => {
    try {

        let totalAmount = req.body.totalAmount
        
        var options = {
            amount: totalAmount * 100,  
            currency: "INR",
            receipt: "receipt_" + Date.now(),
        }
        let order = await instance.orders.create(options);

        console.log(order)

        res.status(200).json({ order })
    }
    catch (err) {
        console.error("Error creating order:", err)
        res.status(500).json({ message: "Internal Server Error" })
    }
}




module.exports = {
    createOrder,
    
}