import React, { useState } from "react";
import axios from "axios";

const LoginUser = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newUser = {
                username: name,
                usermail: mail,
                password: password,
            };
    
            console.log(newUser);
    
            const res = await axios.post('http://localhost:5000/users/login', newUser);
            localStorage.setItem("token", res.data.token); 
            console.log(res.data)
        } catch (error) {
            error.response.data.msg;
        }
    };

    return (
        <div className="container">
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="inputUserName" className="form-label">Username</label>
                    <input 
                        type='text' className="form-control" id="inputUserName" placeholder="Username"
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
                    <label htmlFor="inputPassword" className="form-label">Description</label>
                    <input 
                        type='password' className="form-control" id="inputPassword" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    );
}

export default LoginUser