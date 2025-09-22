const mongoose = require("mongoose")

let orderSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },

    history: [
        {
            billingAddress: {
                name: { type: String },
                number: { type: Number },
                billingName: { type: String },
                billingEmail: { type: String },
                billingNumber: { type: Number },
                billing_address: { type: String },
                country: { type: String, default: "India" },
                state: { type: String },
                city: { type: String },
                notes: { type: String }
            },


            totalAmount: { type: Number },

            paymentStatus: { type: String, enum: ["Pending", "Success", "Failed"], default: "Pending" },
        }
    ]

}, { timestamps: true })

let Order = mongoose.model("Order", orderSchema)

module.exports = Order