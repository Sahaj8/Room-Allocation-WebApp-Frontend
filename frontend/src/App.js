import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import AddUser from "./components/addUser"
import AddRoom from "./components/addRoom"
import LoginUser from "./components/loginUser";
import ActivityList from "./components/activityList";
import AddActivity from "./components/addActivity";

const App = () => {
    return (
      <Router>
        <div className="container">
            <h1> Room Allocation App</h1>
            <Routes>
                <Route path="/" element={<ActivityList/>} exact />
                <Route path="/addActivity" element={<AddActivity/>} exact />
                <Route path="/user" element={<AddUser/>} exact />
                <Route path="/room" element={<AddRoom/>} exact />
                <Route path="/login" element={<LoginUser/>} exact />
            </Routes>
        </div>
      </Router>
    );
  }
export default App;