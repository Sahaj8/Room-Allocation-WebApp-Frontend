import React, { useState, useEffect } from "react";

const Activity = (activity) => {
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
        </>
    );
}
export default Activity;