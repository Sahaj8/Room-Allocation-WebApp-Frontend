import React, {useState} from "react";
import useStyles from "./FormStyles"
import {TextField, Button, Typography, Paper} from "@material-ui/core";
import {useDispatch} from 'react-redux';
import { createActivity } from "../actions/ActivityList";

const ActivityForm = () => {
    const classes = useStyles();
    const [activityData, setActivityData] = useState({
        title: '',
        message: '',
        applicant: '',
        roomNumber: '', 
        activity: '',
        approved: false,
        createdAt: new Date()
    });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createActivity(activityData));
    }
    const clear = () => {
        
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className = {`${classes.root} ${classes.form}`} onSubmit = {handleSubmit}>
                <Typography variant="h6">Creating a Activity List</Typography>
                <TextField 
                    name="creator" 
                    variant="outlined" 
                    label="Creator" 
                    fullWidth
                    value = {activityData.applicant}
                    onChange = {(e) => setActivityData({...activityData, applicant: e.target.value})}
                />
                <TextField 
                    name="message" 
                    variant="outlined" 
                    label="Message" 
                    fullWidth
                    value = {activityData.message}
                    onChange = {(e) => setActivityData({...activityData, message: e.target.value})}
                />
                <TextField 
                    name="roomNumber" 
                    variant="outlined" 
                    label="roomNumber" 
                    fullWidth
                    value = {activityData.roomNumber}
                    onChange = {(e) => setActivityData({...activityData, roomNumber: e.target.value})}
                />
                <TextField 
                    name="activity" 
                    variant="outlined" 
                    label="activity" 
                    fullWidth
                    value = {activityData.activity}
                    onChange = {(e) => setActivityData({...activityData, activity: e.target.value})}
                />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default ActivityForm;