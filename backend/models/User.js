import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: { // equal to roll number
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    usermail: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: String,
    isAdmin: Boolean,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const user = mongoose.model('user', userSchema);
export default user;