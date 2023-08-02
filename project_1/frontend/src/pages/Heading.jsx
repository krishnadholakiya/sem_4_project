import { Outlet, NavLink } from "react-router-dom";
import "../css/index.css";
import ad1 from "../img/address.jpg";
import em1 from "../img/email.png";
import cl1 from "../img/call.png";
import in1 from "../img/in1.jpg";
import n1 from "../img/n1.jpg";
import sn1 from "../img/sn1.jpg";
import s1 from "../img/s1.jpg";
import s2 from "../img/s2.webp";
import s3 from "../img/s3.jpg";
import e1 from "../img/e1.webp";
import e2 from "../img/e2.jpg";
import e3 from "../img/e3.webp";
import t1 from "../img/t1.jpg";
import t2 from "../img/t2.jpg";
import t3 from "../img/t3.jpg";
import m1 from "../img/m1.jpg";
import m2 from "../img/m2.jpg";
import m3 from "../img/m3.jpg";
import ec1 from "../img/ec1.png";
import ec2 from "../img/ec2.png";
import ec3 from "../img/ec3.png";
import sm1 from "../img/sm1.png";
import sm2 from "../img/sm2.jpg";
import sm3 from "../img/sm3.jpg";
import p1 from "../img/p1.jpg";
import p2 from "../img/p2.jpg";
import p3 from "../img/p3.jpeg";


export default function Header(){
    return<>
    {/* <div className="splash">
        <div className="fade-in">
            welcome to the site
        </div>
    </div> */}
        <header className="header">
            <h1>INDIA TODAY</h1>
        </header>
        <br/>
        <div className="btnpadding">
            <table>
                <tr >
                    <td >
                        <a href="#national"><button className="headerbtn"  >NEWS</button></a>
                    </td>
                    <td>
                        <a href="#sport"><button className="headerbtn" >SPORT</button></a>
                    </td>
                    <td>
                        <a href="#tech"><button className="headerbtn" >TECHNOLOGY</button></a>
                    </td>
                    <td>
                        <a href="#entertainment"><button className="headerbtn" >ENTERTAINMENT</button></a>
                    </td>
                    <td>
                        <a href="#politics"><button className="headerbtn" >POLITICS</button></a>
                    </td>
                    <td>
                        <a href="#socm"><button className="headerbtn" >SOCIAL MEDIA</button></a>
                    </td>
                    <td>
                        <a href="#market"><button className="headerbtn" >MARKET</button></a>
                    </td>
            <NavLink to="/Signin" style={(isActive)=>{return}}><button className="headerbtn">SIGN IN</button></NavLink>
                </tr>
            </table> 
        </div>
        <br/>
        <div className="Section_top">
        <div>
            <NavLink to="/Subscribe" style={(isActive)=>{return}}><button className="headerbtn">SUBSCRIBE</button></NavLink>
        </div>
        </div>
        <header className="marq">
        <b> <marquee>INDIA TODAY</marquee></b>
    </header>   
    <br></br>
    <table className="cont1">
        <tr id="national">
            <td>
                <h1 className="title"><marquee>International</marquee></h1>
            </td>
            &nbsp;
            &nbsp;
            <td>
                <h1 className="title"><marquee>National</marquee></h1>
            </td>
            &nbsp;
            &nbsp;
            <td>
                <h1 className="title"><marquee>State</marquee></h1>
            </td>
        </tr>
        <tr>
            <td>
                <div>
                <center><img src={in1} alt="path" height="70px" className="simg"/></center>
                <p>some text here.. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                </p>
                </div>
            </td>
            &nbsp;&nbsp;
            <td>
                <div>
                <center><img src={n1} alt="path" height="70px" className="simg"/></center>
                <p>some text here.. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                </p>
                </div>
            </td>
            &nbsp;&nbsp;
            <td>
                <div>
                <center><img src={sn1} alt="path" height="70px" className="simg"/></center>
                <p>some text here.. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                </p>
                </div>
            </td>
        </tr>
    </table>
    <table  >
        <tr id="sport">
            <td colspan="3">
                <h1 className="title"><marquee>Sports</marquee></h1>
            </td>
        </tr>
        <tr>
            <td>
                <div>
                <center><img src={s1} alt="path" height="70px" className="simg"/></center>
                <p>some text here.. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                </p>
                </div>
            </td>
            <td>
                <div>
                <center><img src={s2} alt="path" height="70px" className="simg"/></center>
                <p>some text here.. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                </p>
                </div>
            </td>
            <td>
                <div>
                <center><img src={s3} alt="path" height="70px" className="simg"/></center>
                <p>some text here.. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                </p>
                </div>
            </td>
        </tr>
        <tr id="entertainment">
            <td colspan="3">
                <h1 className="title"><marquee>Entertainment</marquee></h1>
            </td>
        </tr>
        <tr>
            <td>
                <div>
                <center><img src={e1} alt="path" height="70px" className="simg"/></center>
                <p>some text here.. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                </p>
                </div>
            </td>
            <td>
                <div>
                <center><img src={e2} alt="path" height="70px" className="simg"/></center>
                <p>some text here.. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                </p>
                </div>
            </td>
            <td>
                <div>
                <center><img src={e3} alt="path" height="70px" className="simg"/></center>
                <p>some text here.. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                </p>
                </div>
            </td>
        </tr>
        <tr id="tech">
            <td colspan="3">
                <h1 className="title"><marquee>Technology</marquee></h1>
            </td>
        </tr>
        <tr>
            <td>
                <div>
                <center><img src={t1} alt="path" height="70px" className="simg"/></center>
                <p>some text here.. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                </p>
                </div>
            </td>
            <td>
                <div>
                <center><img src={t2} alt="path" height="70px" className="simg"/></center>
                <p>some text here.. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                </p>
                </div>
            </td>
            <td>
                <div>
                <center><img src={t3} alt="path" height="70px" className="simg"/></center>
                <p>some text here.. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                </p>
                </div>
            </td>
        </tr>
        <tr id="market">
            <td colspan="3">
                <h1 className="title"><marquee>Market</marquee></h1>
            </td>
        </tr>
        <tr>
            <td>
                <div>
                <center><img src={m1} alt="path" height="70px" className="simg"/></center>
                <p>some text here.. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                </p>
                </div>
            </td>
            <td>
                <div>
                <center><img src={m2} alt="path" height="70px" className="simg"/></center>
                <p>some text here.. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                </p>
                </div>
            </td>
            <td>
                <div>
                <center><img src={m3} alt="path" height="70px" className="simg"/></center>
                <p>some text here.. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                </p>
                </div>
            </td>
        </tr>
        <tr id="e-com">
            <td colspan="3">
                <h1 className="title"><marquee>E-Commerce</marquee></h1>
            </td>
        </tr>
        <tr>
            <td>
                <div>
                <center><img src={ec1} alt="path" height="70px" className="simg"/></center>
                <p>some text here.. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                </p>
                </div>
            </td>
            <td>
                <div>
                <center><img src={ec2} alt="path" height="70px" className="simg"/></center>
                <p>some text here.. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                </p>
                </div>
            </td>
            <td>
                <div>
                <center><img src={ec3} alt="path" height="70px" className="simg"/></center>
                <p>some text here.. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                </p>
                </div>
            </td>
        </tr>
        <tr id="socm">
            <td colspan="3">
                <h1 className="title"><marquee>Social Media</marquee></h1>
            </td>
        </tr>
        <tr>
            <td>
                <div>
                <center><img src={sm1} alt="path" height="70px" className="simg"/></center>
                <p>some text here.. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                </p>
                </div>
            </td>
            <td>
                <div>
                <center><img src={sm2} alt="path" height="70px" className="simg"/></center>
                <p>some text here.. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                </p>
                </div>
            </td>
            <td>
                <div>
                <center><img src={sm3} alt="path" height="70px" className="simg"/></center>
                <p>some text here.. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                </p>
                </div>
            </td>
        </tr>
        <tr id="politics">
            <td colspan="3">
                <h1 className="title"><marquee>Politics</marquee></h1>
            </td>
        </tr>
        <tr>
            <td>
                <div>
                <center><img src={p1} alt="path" height="70px" className="simg"/></center>
                <p>some text here.. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                </p>
                </div>
            </td>
            <td>
                <div>
                <center><img src={p2} alt="path" height="70px" className="simg"/></center>
                <p>some text here.. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                </p>
                </div>
            </td>
            <td>
                <div>
                <center><img src={p3} alt="path" height="70px" className="simg"/></center>
                <p>some text here.. Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
                </p>
                </div>
            </td>
        </tr>
    </table>
    <footer className="ftr">
            <table className="ftrtable">
                <tr className="ftrhd">
                    <td>India Today </td>
                    <td> Our Services </td>
                    <td> Quick Link </td>
                    <td id="contact"> Contact Us </td>
                </tr>
                &nbsp;
                <tr>
                    <td><a href="#" className="ftrlink"> Home </a></td>
                    <td><a href="#" className="ftrlink"> Services </a></td>
                    <td><a href="#politics" className="ftrlink"> Politics </a></td>
                    <td rowSpan="5">
                    <iframe className="frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6566214895142!2d72.54448401504702!3d23.036376784946114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84ead1103329%3A0x1a907f7fee8b2b7f!2sGujarat%20University!5e0!3m2!1sen!2sin!4v1678705811032!5m2!1sen!2sin"></iframe>
                    </td>
                </tr>
                <tr>
                    <td><a href="#" className="ftrlink"> About Us </a></td>
                    <td><a href="#" className="ftrlink"> Subscription </a></td>
                    <td><a href="#entertainment " className="ftrlink">Entertainment </a></td>
                </tr>
                <tr>
                    <td><a href="#contact" className="ftrlink"> Contact Us </a></td>
                    <td><a href="#" className="ftrlink"> Magazine </a></td>
                    <td><a href="#market" className="ftrlink"> Market </a></td>
                </tr>
                <tr>
                    <td></td>
                    <td><a href="https://www.youtube.com/watch?v=ZzN46gT4nrk" target="_black" className="ftrlink"> Live TV </a></td>
                    <td><a href="#sport" className="ftrlink"> Sports </a></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td><a href="#socm" className="ftrlink"> Social Media </a></td>
                </tr>
                <tr></tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td> <img src={ad1} className="i"/> &nbsp; &nbsp; &nbsp; Gujarat University, Navarangpura,<br></br> &nbsp;&nbsp; &nbsp; &nbsp; Ahmedabad, Gujarat - 380009  </td>
                </tr>
                <br></br>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><img src={cl1} className="i"/> &nbsp; &nbsp; &nbsp; (+91)-87685 63472</td>
                </tr>
                <br></br>
                <br></br>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><img src={em1} className="i"/>&nbsp; &nbsp; &nbsp;  feedbackindiatoday@gmail.com</td>
                </tr>
            </table>
        </footer>
        <Outlet/>
    </>
}