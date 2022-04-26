import { room } from "../models/Room.js"

export const getRoom = (req, res) => {
    res.send('It works');
}

export const addRoom = (req, res) => {
    // res.send('It works');
    const roomNumber = req.body.roomNumber;
    const size = req.body.size;
    const description = req.body.description;

    const newRoom = new room({roomNumber,size,description});

    newRoom.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
}

export const deleteRoom = (req, res) => {
    res.send('It works');
}