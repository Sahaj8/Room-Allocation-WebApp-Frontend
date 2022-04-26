import React, { useState } from "react";
import axios from "axios";

const AddUser = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            username: name,
            usermail: mail,
            password: name,
            description: desc,
            isAdmin: false
        };

        console.log(newUser);

        axios.post('http://localhost:5000/users/add', newUser)
            .then(res => console.log(res.data));
        
    };

    return (
        <div className="container">
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="inputUserName" className="form-label">Username</label>
                    <textarea 
                        className="form-control" id="inputUserName" placeholder="Username"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputEmail">Email</label>
                    <input 
                        type="email" 
                        className="form-control" id="inputEmail" placeholder="Email"
                        onChange={(e) => setMail(e.target.value)}
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

export default AddUser