import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const UserList = () => {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect( ()=>{
        const token = localStorage.getItem('token');
        if(token)
        {
            axios.get("https://afb9-103-156-19-229.in.ngrok.io/users/", {
                headers: { Authorization: token },
              })
                .then((res) => {
                    console.log(res.data.user);
                    if(res.status===201)
                    {  
                        if(res.data.user.isAdmin === false){
                            window.location.href="/";
                            alert("Permision denied!")
                        }
                        else {
                            axios.get("https://afb9-103-156-19-229.in.ngrok.io/users/list")
                                .then((res) => {
                                    if(res.status === 201){
                                        console.log(res.data);
                                        setUserList(res.data);
                                        setLoading(true);
                                    }
                                    else console.log("Server error!");
                                })
                        }
                    }
                    else
                    {   
                        alert("Token invalid!");
                        window.location.href="/login";
                    }
                })
                .catch((err) => {
                    console.log(err);
                    // console.log(res.status);
                    alert("Internal Server Error");
                })
        }
        else  window.location.href="/login";
    },[])

    const deleteuser = async (id) => {
        console.log(id);
        const res2 = await axios.delete(`https://afb9-103-156-19-229.in.ngrok.io/users/delete/${id}`);

        const deletedata = await res2.data;
        console.log(deletedata);

        if (res2.status === 401 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            // setDLTdata(deletedata)
            // getdata();
            setUserList(userList.filter(ul => ul._id !== id))
        }

    }

    return (
        <>
        {
            loading?
            <>
            <div className="mt-5">
                <div className="container">
                    <div className="add_btn mt-2 mb-2">
                        <Link to="/user/add" className="btn btn-primary">Add User</Link>
                    </div>

                    <table className="table">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">id</th>
                                <th scope="col">Username</th>
                                <th scope="col">email</th>
                                <th scope="col">Description</th>
                                {/* <th scope="col">isAdmin</th> */}
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                userList.map((element, id) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{id + 1}</th>
                                                <td>{element.username}</td>
                                                <td>{element.usermail}</td>
                                                <td>{element.description}</td>
                                                {/* <td>{element.isAdmin}</td> */}
                                                <td className="d-flex justify-content-between">
                                                    {/* <NavLink to={`view/${element._id}`}> <button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink> */}
                                                    <Link to={`/user/edit/${element._id}`}>  <button className="btn btn-primary">Edit</button></Link>
                                                    {/* <button className="btn btn-primary">Edit</button> */}
                                                    <button className="btn btn-danger" onClick={() => deleteuser(element._id)}>Delete</button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            </>
            :
            <></>
        }
        </>
    );
}

export default UserList;