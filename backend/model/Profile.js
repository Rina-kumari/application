const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
    {
        photo: {
            data: Buffer,
            contentType: String
        },
        name: {
            type: String,
            trim: true,
            required: true
        },
        detail: {
            type: String,
            required: true
        },
        skills: {
            type: String,
            required: true,
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model("Profile", ProfileSchema);