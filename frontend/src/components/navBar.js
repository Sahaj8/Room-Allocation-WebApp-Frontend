// import { userInfo } from 'os';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

export const NavBar = () => {
    const [isAuthenticated, setisAuthenticated] = useState(false);
    const [isAdmin, setisAdmin] = useState(false);
    const [name, setName] = useState("");
    
    useEffect( ()=>{
        const token = localStorage.getItem('token');
        if(token)
        {
            axios.get("http://localhost:5000/users/", {
                headers: { Authorization: token },
              })
                .then((res) => {
                    if(res.data.user){
                        setisAuthenticated(true);
                        setisAdmin(res.data.user.isAdmin);
                    }
                    else setisAuthenticated(false);
                })
                .catch((err) => {
                    console.log(err);
                    // console.log(res.status);
                    alert("Internal Server Error");
                })
        }
        else{
            setisAuthenticated(false);
        }
    },[])

    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Room Allocation App</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Home</Link>
          </li>
          {isAuthenticated && isAdmin ?
            <>
                <li className="navbar-item">
              <Link to="/room" className="nav-link">Add Room</Link>
              </li>
              <li className="navbar-item">
              <Link to="/user" className="nav-link">Add User</Link>
              </li>
            </>
            :
            <></>
              
          }
          <li className="navbar-item">
            <Link to="/addActivity" className="nav-link">Request Room</Link>
            </li>
          {
              isAuthenticated ?
              <>
                
                <li className="navbar-item">
                <Link to="/" className="nav-link">Logout</Link>
                </li>
              </>
              :
              <>
                <li className="navbar-item">
                <Link to="/login" className="nav-link">Login</Link>
                </li>
              </>
          }
        </ul>
        </div>
      </nav>
    );
}