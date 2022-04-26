import mongoose from 'mongoose';

const roomSchema = mongoose.Schema({
    // To Do: Add schema related to cards that display current activities on the front page.
    roomNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    size: Number,
    description: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

export const room = mongoose.model('room', roomSchema);
// export default room;