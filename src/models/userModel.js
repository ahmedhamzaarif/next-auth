import mongoose from "mongoose";
import { type } from "os";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

// prehooks: recommended not to use mongoose prehooks in nextjs

// mern: export const User = mongoose.model("User", userSchema) -> MongoDB treats User as users

const User = mongoose.models.users || mongoose.model('users', userSchema) // finds user model, if not found then creates it

export default User