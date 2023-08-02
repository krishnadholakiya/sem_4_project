import { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/login.css";

export default function Signup() {

    const navigate = useNavigate();
    const [mydata, setmydata] = useState({ username: "", email: "", password: "", contact: "" });

    const handleChange = (e) => {
        setmydata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        console.log(mydata);
        e.preventDefault()
        try {
            await axios.post("http://localhost:5000/user", mydata);
        }
        catch (err) {
            console.log(err)
        }
    };

    return <>
        <header id="signin">
            <h1>SIGN UP</h1>
        </header>
        <br />
        <table>
            <tr>
                <th><NavLink to="/" style={(isActive) => { return }}><button className="hbtn"> Home </button></NavLink></th>
            </tr>
        </table>
        <form>
            <table className="form12">
                <tr>
                    <th className="a1s">SIGN-UP PAGE</th>
                </tr>
                <tr></tr>
                <td className="t1"> FULL NAME:</td>
                <tr>
                    <td><input type="text" name="username" placeholder="as per addhar" className="d1" onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td className="t1"> E-mail ID: </td>
                    <tr>
                        <td><input type="email" name="email" placeholder="e-mail id" className="d1" onChange={handleChange} required /></td>
                    </tr>
                </tr>
                <tr>
                    <td className="t1">NEW-PASSWORD</td>
                </tr>
                <tr>
                    <td><input type="password" name="password"
                        placeholder="enter password" className="d1" onChange={handleChange} required /></td>
                </tr>
                <tr>
                    <td className="t1">CONTACT NO</td>
                </tr>
                <tr>
                    <td><input type="number" name="contact" placeholder="enter contact number" className="d1" onChange={handleChange} required /></td>
                </tr>
                <br />
                <tr>
                    <td>
                        <button type="submit"  className="su" onClick={handleClick}><NavLink to="/" className="navlinksub"> Submit  </NavLink></button> 
                    </td>
                </tr>
                <tr>
                    <td className="a2">
                        You already have an account ?
                        &nbsp; <NavLink to="/Signin" style={(isActive) => { return }}>SIGN IN</NavLink></td>
                </tr>
                <tr>
                </tr>
            </table>
        </form>
        <Outlet />
    </>
}
