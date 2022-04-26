import React from "react";
import Activity from "./Activity";
import useStyles from "./ActivityListStyles"
import { useSelector } from "react-redux";

const ActivityList = () => {
    const classes = useStyles();
    const activityList = useSelector((state) => state.ActivityList);
    console.log(activityList);
    return (
        <>                    
            {activityList.map(function(object, index){
                console.log(object);
                return <Activity {...object} key={index}/>
            })}
        </>
    );
}

export default ActivityList;