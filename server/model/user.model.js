const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        minlength: 6,
        unique: [true, "Username already exists"]
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already exists"]
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    avatar: {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        }
    },
    bio: {
        type: String,
        default: "Welcome to my profile"
    },

}, {
    timestamps: true
});


const Users = mongoose.model("User", UserSchema);
module.exports = Users;