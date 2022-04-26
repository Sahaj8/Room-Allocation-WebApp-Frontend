import React, {useEffect} from "react";
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import ActivityList from "./components/ActivityList";
import ActivityForm from "./components/ActivityForm";
import useStyles from "./styles";
import { getActivityList } from "./actions/ActivityList";
import { useDispatch } from "react-redux";

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getActivityList());
    }, [dispatch]);
    return (
        <Container maxWidth="lg">
            <AppBar className = {classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">
                    Room Allocation App
                </Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <ActivityList />
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <ActivityForm />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}
export default App; 