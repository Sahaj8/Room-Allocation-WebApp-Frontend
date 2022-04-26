import Activity from "../models/FrontPage.js"

export const getFrontPage = async (req, res) => {
    try {
        const activites = await Activity.find();
        console.log(activites);
        res.status(200).json(activites);
    }
    catch(error) {
        res.status(404).json({message: error.message});
    }
}

export const createActivity = async (req, res) => {
    const newActivityData = req.body;
    const newActivity = new Activity(newActivityData);
    try{    
        await newActivity.save();
        res.status(201).json(newActivity);
    }
    catch(error) {
        res.status(409).json({message: error.message});
    }
}