import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Profile from "./profile";

const Login = () => {
    const navigate = useNavigate()
    const[User_login,set_User_login] = useState(0);
    const[User_data,set_User_data] = useState({
        email:"",
        password:"",
    })
    const LoginSubmit =(event) => {
        event.preventDefault();
        if(User_data.email === "admin" && User_data.password === "admin"){
            localStorage.setItem("user", "OK");
            set_User_login(1);
        }
    }
    const updateData =(event) =>{
        set_User_data({
            ...User_data,
            [event.target.name]: event.target.value,
        })
    }
    if (User_login === 0){
    return(
        <div className="login_box">
            <div className="login_head"><b>LOGIN</b></div>
            <form onSubmit={LoginSubmit}>
            <label className="heading" forHtml="Username">Username : </label>
            <input  name="email" type="text" id="Username" placeholder="Enter Username" value={User_data.email} onChange={updateData}></input><br></br>
            <label className="heading" forHtml="Password">Password : </label>
            <input name="password" type="password" id="Password" placeholder="Enter password" value={User_data.password} onChange={updateData}></input><br></br>
            <button type="submit"><b>Login</b></button>
            </form>

        </div>
    )
    }
    else{
        return(
            navigate('/profile')
        )
    }
}
export default Login;