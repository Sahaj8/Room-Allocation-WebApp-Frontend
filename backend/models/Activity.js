import mongoose from 'mongoose';

const activitySchema = mongoose.Schema({
    // To Do: Add schema related to cards that display current activities on the front page.
    applicant: String,
    message: String,
    roomNumber: String, 
    activity: String,
    status: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const activity = mongoose.model('activity', activitySchema);
export default activity;