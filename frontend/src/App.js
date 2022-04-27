import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import AddUser from "./components/addUser"
import AddRoom from "./components/addRoom"
import LoginUser from "./components/loginUser";
import ActivityList from "./components/activityList";
import AddActivity from "./components/addActivity";
import { NavBar } from "./components/navBar";
import UserList from "./components/userList";

const App = () => {
    return (
      <Router>
        <div className="container">
            <NavBar/>
            <h1> Room Allocation App</h1>
            <Routes>
                <Route path="/" element={<ActivityList/>} exact />
                <Route path="/addActivity" element={<AddActivity/>} exact />
                <Route path="/user/add" element={<AddUser/>} exact />
                <Route path="/user/list" element={<UserList/>} exact />
                <Route path="/room/add" element={<AddRoom/>} exact />
                <Route path="/login" element={<LoginUser/>} exact />
            </Routes>
        </div>
      </Router>
    );
  }
export default App;