import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import AddUser from "./components/addUser"
import AddRoom from "./components/addRoom"
import LoginUser from "./components/loginUser";

const App = () => {
    return (
      <Router>
        <div className="container">
        {/* <Navbar /> */}
        <br/>
        <h1> Room Allocation App</h1>
        <Routes>
            <Route path="/user" element={<AddUser/>} exact />
            <Route path="/room" element={<AddRoom/>} exact />
            <Route path="/login" element={<LoginUser/>} exact />
        </Routes>
        </div>
      </Router>
    );
  }
export default App;