import React, { useState, useEffect } from "react";
import axios from "axios";
import Activity from "./activity";

const ActivityList = () => {
    const [activityList, setActivityList] = useState( [] );
    const [filterOption, setFilterOption] = useState( ["Pending", "Approved", "My Requests", "All"] );
    const [currentFilter, setCurrentFilter] = useState("");

    const [isAuthenticated, setisAuthenticated] = useState(false);
    const [isAdmin, setisAdmin] = useState(false);
    const [name, setName] = useState("");

    useEffect(() => {
        const getActivityList = async () => {
            const response = await axios.get("http://localhost:5000/activity");
            const activityData = await response.data;
            setActivityList(activityData);
        };
        getActivityList();

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
                        if(isAuthenticated && isAdmin) {
                            setCurrentFilter("Pending")
                        }
                        else if(isAuthenticated) {
                            setCurrentFilter("Approved")
                        }
                    }
                    else {
                        setisAuthenticated(false);
                        setCurrentFilter("All");
                    }
                })
                .catch((err) => {
                    console.log(err);
                    alert("Internal Server Error");
                })
        }
        else{
            setisAuthenticated(false);
        }
        console.log("Activity Filter", currentFilter);
    }, []);
    console.log(activityList);
    return (
        <>       
            {
                currentFilter == "All" ?
                activityList.map(function(object, index){
                    return <Activity {...object} key={index}/>
                })
                :
                activityList.filter(activity => (activity.status == currentFilter)).map(function(object, index) {
                    console.log("here", object.status, currentFilter)
                    return <Activity {...object} key={index} />
                })
            }             
        </>
    );
}

export default ActivityList;