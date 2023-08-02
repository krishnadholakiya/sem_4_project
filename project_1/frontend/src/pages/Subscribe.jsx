import { Outlet, NavLink } from "react-router-dom";
import "../css/sub.css";

export default function Subscribe(){
    return<>
    <header>
        <h1>INDIA TODAY</h1>
    </header>
    <br></br>
    <NavLink to="/" style={(isActive)=>{return}}><button className="hbtn"> Home </button></NavLink>

    <center><h1> Subscribe Now & Dive Deeper With IT Premium </h1></center>
   
   <center>
    <form>
<table className="form1">
        <tr>  
            <th className="a1">Feature offer 1</th>
        </tr> 
        <tr>
            <td className="t1"><li> Digital All Access</li> </td>
        </tr>
        <tr>
            <td className="t1"><li>First Month Free</li></td>
        </tr>
        <tr>
            <td className="t2">then ₹1,199/year</td>
        </tr>
        <tr>
            <td className="t3">₹2,988</td>
        </tr>
        <tr>
            <td><input type="submit" className="su" value="Subscribe Now"/></td>
        </tr>
        <tr>
            <td><li>Access on all devices</li></td>
        </tr>
        <tr>
            <td><li>Read Daily E-Paper</li></td>
        </tr>
        <tr>
            <td><li>Exclusive subscriber news letter</li></td>
        </tr>
</table>    
</form>

<br></br>
    <br></br>

<form >
    <table className="form2">
            <tr>  
                <th className="a1">Student Offers</th>
            </tr> 
            <tr>
                <td className="t1"><li> Digital All Access</li> </td>
            </tr>
            <tr>
                <td className="t1"><li>₹100/3months</li></td>
            </tr>
            <tr>
                <td className="t2">then ₹900/year</td>
            </tr>
            <tr>
                <td className="t3">₹5,977</td>
            </tr>
            <tr>
                <td><input type="submit" className="su" value="Subscribe Now"/></td>
            </tr>
            <tr>
                <td><li>Access on all devices</li></td>
            </tr>
            <tr>    
                <td><li>Read Daily E-Paper</li></td>
            </tr>
            <tr>
                <td><li>Exclusive subscriber news letter</li></td>
            </tr>
            <tr>
                <td><li>Enjoy Ad-Free Experience</li></td>
            </tr>
            <tr>
                <td><li>Unlock All Premium Articles</li></td>
            </tr>
    </table>    
    </form>

    <br></br>
    <br></br>
    
    <form >
        <table className="form3">
                <tr>  
                    <th className="a1">Feature offer 2</th>
                </tr> 
                <tr>
                    <td className="t1"><li> Ad-Free & Digital All Access</li> </td>
                </tr>
                <tr>
                    <td className="t1"><li>First Month Free</li></td>
                </tr>
                <tr>
                    <td className="t2">then ₹1,999/year</td>
                </tr>
                <tr>
                    <td className="t3">₹5,977</td>
                </tr>
                <tr>
                    <td><input type="submit" className="su" value="Subscribe Now"/></td>
                </tr>
                <tr>
                    <td><li>Access on all devices</li></td>
                </tr>
                <tr>
                    <td><li>Read Daily E-Paper</li></td>
                </tr>
                <tr>
                    <td><li>Exclusive subscriber news letter</li></td>
                </tr>
                <tr>
                    <td><li>Enjoy Ad-Free Experience</li></td>
                </tr>
                <tr>
                    <td><li>Unlock All Premium Articles</li></td>
                </tr>
        </table>    
        </form>
        </center>
    </>
}