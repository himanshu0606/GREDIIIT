import React , {useState} from "react";

const Register = () =>{

    const[user_reg_data,set_reg_data] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        age: "",
        contact: "",
        password: "",
    })


    const Register_update = (event) => {
        set_reg_data({
            ...user_reg_data,
            [event.target.name]: event.target.value,
        })
    }
    return(
        <div className="login_box">
            <div className="login_head"><b>REGISTER</b></div>
            <form>
                <label className="heading" forHtml="Firstname">First Name : </label>
                <input  name="first" type="text" id="Firstname" placeholder="Enter Firstname" value={user_reg_data.first} onChange={Register_update}></input><br></br>
                <label className="heading" forHtml="Lastname">Last Name : </label>
                <input name="last" type="text" id="Lastname" placeholder="Enter Lastname" value={user_reg_data.last} onChange={Register_update}></input><br></br>
                <label className="heading" forHtml="Username">User Name : </label>
                <input name="User" type="text" id="Username" placeholder="Enter Username" value={user_reg_data.user} onChange={Register_update}></input><br></br>
                <label className="heading" forHtml="Email">E-mail : </label>
                <input name="email" type="email" id="Email" placeholder="Enter Email" value={user_reg_data.email} onChange={Register_update}></input><br></br>
                <label className="heading" forHtml="Age">Age : </label>
                <input name="age" type="number" id="Age" placeholder="Enter Age" value={user_reg_data.age} onChange={Register_update}></input><br></br>
                <label className="heading" forHtml="Contact">Contact : </label>
                <input name="contact" type="number" id="Contact" placeholder="Enter Contact" value={user_reg_data.contact} onChange={Register_update}></input><br></br>
                <label className="heading" forHtml="Password">Password : </label>
                <input name="password" type="password" id="password" placeholder="Enter Password" value={user_reg_data.password} onChange={Register_update}></input><br></br>
                <button type="submit"><b>Register</b></button>
            </form>
        </div>
    )
}

export default Register;