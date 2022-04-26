import React, { useState, useEffect } from "react";
import axios from "axios";

const Activity = (activity) => {
    console.log(activity);
    return (
        <>                    
            <h4>{activity.applicant}</h4>
            <h4>{activity.activity}</h4>
            <h4>{activity.roomNumber}</h4>
            <h4>{activity.status}</h4>
            <h4>{activity.createdAt}</h4>
        </>
    );
}

export default Activity;