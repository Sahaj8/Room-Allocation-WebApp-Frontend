import React, { useState } from "react";
import axios from "axios";

const AddActivity = () => {
    const [activityData, setActivityData] = useState({
        applicant: '',
        activity: '',
        roomNumber: '', 
        status: "pending",
        createdAt: new Date()
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(activityData);

        axios.post('http://localhost:5000/activity/add', activityData)
            .then(res => console.log(res.data))
            .catch(error => console.log(error)); 
        
    };
    return (
        <div className="container">
            <h2>Request Room</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="Applicant" className="form-label">Applicant</label>
                    <textarea 
                        className="form-control" id="Applicant" placeholder=""
                        onChange = {(e) => setActivityData({...activityData, applicant: e.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Activity" className="form-label">Activity</label>
                    <textarea 
                        className="form-control" id="Activity" placeholder=""
                        onChange = {(e) => setActivityData({...activityData, activity: e.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Room Number" className="form-label">Room Number</label>
                    <textarea 
                        className="form-control" id="Room Number" placeholder=""
                        onChange = {(e) => setActivityData({...activityData, roomNumber: e.target.value})}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    );
}

export default AddActivity;