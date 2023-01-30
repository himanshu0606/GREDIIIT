import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import profile from "./profile.png"

const Profile = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("user")
        navigate('/')
    }
    if(localStorage.getItem("user"))
    {
    return(
        <div className="profile_box">
            <div className="user_head"> <h1>User Profile</h1></div>
            <img src={profile} className="img"></img>
            <div className="user_info">
                <div className="head"><h2>NAME:</h2></div><p>Himanshu Sarraf</p><br></br>
                <div className="head"><h2>E-MAIL:</h2></div><p>himanshu.sarraf@students.iiit.ac.in</p><br></br>
                <div className="head"><h2>AGE:</h2></div><p>20</p><br></br>
                <div className="head"><h2>CONTACT:</h2></div><p>8447841491</p><br></br>
            </div>
            <button type="submit" onClick={logout}>LOG OUT</button>
        </div>
    )
    }
    else {
        logout();
    }
}

export default Profile