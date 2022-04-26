import axios from 'axios';

const url = "http://localhost:5000/activityList"

export const fetchActivity = () => axios.get(url);
export const createActivity = (newActivity) => axios.post("http://localhost:5000/createActivity", newActivity) 