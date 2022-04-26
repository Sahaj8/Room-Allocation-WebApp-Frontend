import * as api from "../api";


export const getActivityList = () => async (dispatch) => {
    // This will call the reducer/ActivityList.js and code with type = "Fetch_all" will get executed.
    try {
        const {data} = await api.fetchActivity(); 
        dispatch({type: "FETCH_ALL", payload: data});
    } catch (error) {
        console.log(error.message);
    }  
}

export const createActivity = (newActivity) => async (dispatch) => {
    console.log("In Actions/activityList", newActivity);
    try {
        const {data} = await api.createActivity(newActivity);
        dispatch({type: "CREATE", payload: data});
    }
    catch(error) {
        console.log(error.message);
    }
}