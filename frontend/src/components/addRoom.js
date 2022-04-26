import React, { useState } from "react";
import axios from "axios";

const AddRoom = () => {
    const [number, setNumber] = useState("");
    const [size, setSize] = useState(0);
    const [desc, setDesc] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newRoom = {
            roomNumber: number,
            size: size,
            description: desc,
        };

        console.log(newRoom);

        axios.post('http://localhost:5000/rooms/add', newRoom)
            .then(res => console.log(res.data));
        
    };

    return (
        <div className="container">
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="inputRoomNumber" className="form-label">Room Number</label>
                    <textarea 
                        className="form-control" id="inputRoomNumber" placeholder="A-101"
                        onChange={(e) => setNumber(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputSize">Email</label>
                    <input 
                        // type="email" 
                        className="form-control" id="inputSize" placeholder="100"
                        onChange={(e) => setSize(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputDescription" className="form-label">Description</label>
                    <textarea 
                        className="form-control" id="inputDescription" placeholder="Description"
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    );
}

export default AddRoom