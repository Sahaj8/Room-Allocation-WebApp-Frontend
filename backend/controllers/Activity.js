import Activity from "../models/Activity.js";

export const getActivityList = async (req, res) => {
    try {
        const activities = await Activity.find();
        console.log(activities);
        res.status(200).json(activities);
    }
    catch(error) {
        console.log({message: error.message});
    }
}

export const addActivity = async (req, res) => {
    const newActivityData = req.body;

    const newActivity = new Activity(newActivityData);
    try {
        await newActivity.save();
        res.status(201).json(newActivity);
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
}