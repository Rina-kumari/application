const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            maxlength: 32
        },
        phoneNumber: {
            type: Number,
            maxlength: 2000
        },
        email: {
            type: String,
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model("Contact", ContactSchema);