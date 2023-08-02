import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import "../css/login.css";

export default function Signin(){

const navigate = useNavigate();
const [mydata,setmydata] = useState({email:"",password:""});

const handleChange = (e) => {
    setmydata((prev) => ({ ...prev, [e.target.name]: e.target.value}));
};

const handleClick = async (e) => {
    console.log(mydata);
    e.preventDefault()
    try{
        await axios.post("http://localhost:5000/api3", mydata);
        navigate('/mydata')
    }
    catch(err){
        console.log(err)
    }
};

    return<>
        <header className="header" id="signin">
        <h1>SIGN IN</h1>
        </header>
    <br/>
        <table>
            <tr>
                <th><NavLink to="/" style={(isActive)=>{return}}><button className="hbtn"> Home </button></NavLink></th>
            </tr>
        </table>
        <center>
        <form >
    <table className="form12" align="CENTER" >
        <tr>
            <th className="a1s"><center>SIGN-IN PAGE</center></th>
            </tr> 
        <tr>
        <td className="t1"> E-mail ID: </td>
        <tr>
        <td><input type="email" name="e-mail" placeholder="e-mail id" className="d1" onChange={handleChange}/></td>
        </tr>
        </tr>
        <tr>
            <td className="t1">PASSWORD</td>
        </tr>
        <tr>
            <td><input type="password" name="pass"
                placeholder="enter password" className="d1" onChange={handleChange} required/></td>
        </tr>
        <br/>
        <tr>
            <td><input type="submit" className="su" value="SIGN IN"/></td>
        </tr>
        <tr>
            <td className="a2"> Don't have account ?
            &nbsp;<NavLink to="/Signup" style={(isActive)=>{return}}>SIGN UP</NavLink></td>
            </tr>
    </table>
    </form>
    </center>
    <Outlet/>
</>
}