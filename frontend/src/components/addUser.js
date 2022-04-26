import React, { useState, useEffect } from "react";
import axios from "axios";

const AddUser = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [desc, setDesc] = useState("");

    useEffect( ()=>{
        const token = localStorage.getItem('token');
        if(token)
        {
            axios.get("http://localhost:5000/users/", {
                headers: { Authorization: token },
              })
                .then((res) => {
                    console.log(res.data.user);
                    if(res.status===201)
                    {  
                        if(res.data.user.isAdmin === false) window.location="/";
                    }
                    else
                    {   
                        alert("Internal Server Error : " + res.status);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    // console.log(res.status);
                    alert("Internal Server Error");
                })
        }
        else  window.location="/login";
    },[])

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

export default AddUser;