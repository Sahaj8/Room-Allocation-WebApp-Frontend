import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

import AddUser from "./components/addUser"
import AddRoom from "./components/addRoom"

const App = () => {
    return (
      <Router>
        <div className="container">
        {/* <Navbar /> */}
        <br/>
        <h1> Room Allocation App</h1>
        <Route path="/user" exact component={AddUser} />
        <Route path="/room" exact component={AddRoom} />
        </div>
      </Router>
    );
  }
export default App;