import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddUser from "./components/addUser"
import AddRoom from "./components/addRoom"

const App = () => {
    return (
      <Router>
        <div className="container">
        <Routes>
            <Route path="/" component = {AddRoom}/>
        </Routes>
        
        </div>
      </Router>
    );
  }
export default App;