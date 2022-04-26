import React from "react";
import useStyles from "./ActivityStyles"
import {Card, CardActions, Typography, Button, CardContent} from "@material-ui/core";
import { Container, ListGroup, ListGroupItem, Collapse } from 'reactstrap';

const Activity = (activity) => {
    const classes = useStyles();
    console.log(activity.applicant);
    return (
        <>
            <Card style={{width: 600,backgroundColor: "#EEEADE"}}>
                <CardContent>
                    <Typography style={{ fontSize: 14 }} color="textSecondary" gutterBottom>
                        Creator: {activity.applicant}   
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Activity: {activity.activity}
                    </Typography>
                    <Typography style={{ fontSize: 16 }} variant="h5" component="h2">
                        Room Number: {activity.roomNumber}
                    </Typography>
                    </CardContent>
                <CardActions>
                    <Button size="small">View Details</Button>
                </CardActions>
            </Card>
        </>
    );
}

export default Activity;