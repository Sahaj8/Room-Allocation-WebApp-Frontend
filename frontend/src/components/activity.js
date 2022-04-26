import React, { useState, useEffect } from "react";
import axios from 'axios';

const Activity = (activity) => {
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

    console.log(activity);
    return (
        <>                    
            <h4>{activity.applicant}</h4>
            <h4>{activity.activity}</h4>
            <h4>{activity.roomNumber}</h4>
            <h4>{activity.status}</h4>
            <h4>{activity.createdAt}</h4> 
            <h4>{activity.startDateTime}</h4>
            <h4>{activity.endDateTime}</h4>
            <button>Approve</button>
            <button>Decline</button>
        </>
    );
}
export default Activity;