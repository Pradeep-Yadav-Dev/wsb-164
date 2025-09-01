const mongoose = require("mongoose")

const profileSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    profileImage: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    }

},{
    timestamps: true
}
)

const Profile = mongoose.model("Profile", profileSchema)

module.exports = Profile