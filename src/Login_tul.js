import React from 'react';
import { useState } from 'react';
import { FaUser, FaSignInAlt, FaReddit } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import "../style/Login.css";
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Navigate } from "react-router-dom";

export default function Login() {

    const [LoggedIn, setLogin] = useState(0); //to login after right credentials entered
    const [LoginData, setLoginData] = useState({
        email: "",
        password: "",
    })
    const [WrongCredantial, setCredantial] = useState(0); //wrong data entered

    const [RegisterData, setRegisterData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        age: "",
        contact: "",
        password: "",
    });

    const updateRegister = (event) => {
        setRegisterData({
            ...RegisterData,
            [event.target.name]: event.target.value,
        })
    }
    const updateData = (event) => {
        setCredantial(0);
        setLoginData({
            ...LoginData,
            [event.target.name]: event.target.value,
        });
    }
    //Submitting login data
    const LoginSubmit = (event) => {
        event.preventDefault();
        if (LoginData.email === "admin" && LoginData.password === "admin") {
            localStorage.setItem("user", "OK");
            setLogin(1);
        }
        else {
            setCredantial(1);
        }
    }

    if (LoggedIn === 0) {
        return (
            <>
                <div className='container-fluid loginBody'>
                    <div className='headerLogin'>
                        <FaReddit style={{ color: "orange", margin: "20px", float: "left" }} size={80} />
                        <h1>
                            <b><span style={{ color: "orange", fontSize: "60px" }}>Gred</span><span style={{ fontSize: "60px" }}>IIT</span></b>
                        </h1>
                    </div>
                    <div className='wrapperLogin'>
                        <h1 id="LoginId">
                            <FaSignInAlt style={{ margin: "10px" }} /><b>Login</b>
                        </h1>
                        <form onSubmit={LoginSubmit}>
                            <div className='inputLoginbox'>
                                <input type="text" required id='email' name='email' value={LoginData.email} onChange={updateData} autoComplete="off"></input>
                                <label><b>Email</b></label>
                                <AiTwotoneMail className='LoginIcon'></AiTwotoneMail>
                            </div>
                            <div className='inputLoginbox'>
                                <input type="password" required id='password' name='password' value={LoginData.password} onChange={updateData}></input>
                                <label><b>Password</b></label>
                                <RiLockPasswordFill className='LoginIcon' />
                            </div>
                            <div className='remember-forgot'>
                                <label>
                                    <input type="checkbox" style={{ margin: "5px" }} /><b>Remember me</b>
                                </label>
                                <Link to="/" className='LoginForgot'><b>Forgot Password?</b></Link>
                            </div>
                            <button type="submit" className="LoginSubmit"><b>Login</b></button>
                            <div className='register-link'>
                                <p>Don't have an account?<AnchorLink href="#register">Register</AnchorLink></p>
                            </div>
                            {WrongCredantial > 0 && <div className='WrongCredentials'>
                                Sorry, your password was incorrect.<br /> Please double-check your password.
                            </div>}
                        </form>
                    </div>
                </div>

                <div className='container-fluid loginBody' id="register">
                    <div className='wrapperRegister'>
                        <h1 id="LoginId" style={{ color: "#fff" }}>
                            <FaUser style={{ marginRight: "10px", float: "left" }} />
                            <b>Register</b>
                        </h1>
                        <form>
                            <div className='inputLoginbox'>
                                <input type="text" required id='firstname' name='firstname' value={RegisterData.firstname} onChange={updateRegister} ></input>
                                <label><b>FirstName</b></label>
                            </div>
                            <div className='inputLoginbox'>
                                <input type="text" required id='lastname' name='lastname' value={RegisterData.lastname} onChange={updateRegister} ></input>
                                <label><b>LastName</b></label>
                            </div>
                            <div className='inputLoginbox'>
                                <input type="text" required id='username' name='username' value={RegisterData.username} onChange={updateRegister} ></input>
                                <label><b>UserName</b></label>
                            </div>
                            <div className='inputLoginbox'>
                                <input type="email" required id='email' name='email' value={RegisterData.email} onChange={updateRegister}></input>
                                <label><b>Email</b></label>
                            </div>
                            <div className='inputLoginbox'>
                                <input type="text" required id='age' name='age' value={RegisterData.age} onChange={updateRegister} ></input>
                                <label><b>Age</b></label>
                            </div>
                            <div className='inputLoginbox'>
                                <input type="text" required id='age' name='age' value={RegisterData.age} onChange={updateRegister} ></input>
                                <label><b>Contact</b></label>
                            </div>
                            <div className='inputLoginbox'>
                                <input type="password" required id='password' name='password' value={RegisterData.password} onChange={updateRegister} ></input>
                                <label><b>Password</b></label>
                            </div>

                            <button type="submit" className="LoginSubmit"><b>Register</b></button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <Navigate to="/profile" replace={true} />
        )
    }
}
