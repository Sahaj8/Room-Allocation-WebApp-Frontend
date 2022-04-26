import React, { useState, useEffect } from "react";
import axios from "axios";
import Activity from "./activity";

const ActivityList = () => {
    const [activityList, setActivityList] = useState( [] );

    useEffect(() => {
        const getActivityList = async () => {
            const response = await axios.get("http://localhost:5000/activity");
            const activityData = await response.data;
            setActivityList(activityData);
        };
        getActivityList();
    }, []);
    console.log(activityList);
    return (
        <>                    
            {activityList.map(function(object, index){
                return <Activity {...object} key={index}/>
            })}
        </>
    );
}

export default ActivityList;