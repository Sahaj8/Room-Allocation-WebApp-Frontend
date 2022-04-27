import { room } from "../models/Room.js"

export const getRoom = async (req, res) => {
    try {
        const rooms = await room.find();
        console.log(rooms);
        res.status(200).json(rooms);
    }
    catch(error) {
        console.log({message: error.message});
    }
}

export const addRoom = async (req, res) => {
    // res.send('It works');
    const roomNumber = req.body.roomNumber;
    // const size = req.body.size;
    // const description = req.body.description;

    if(!roomNumber){
        res.status(400)
        throw new Error('Please add value')
    }

    const roomExists = await User.findOne(req.body)
    console.log(roomExists);
    if (roomExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // const newRoom = new room({roomNumber,size,description});
    const newRoom = new room(req.body);

    newRoom.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err.message));
}

export const deleteRoom = (req, res) => {
    res.send('It works');
}