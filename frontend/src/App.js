import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

import AddUser from "./components/addUser"
import AddRoom from "./components/addRoom"

const App = () => {
    return (
        <div>
            <h1>Room Allocation App</h1>
            <AddRoom/>
        </div>
    );
}
export default App;