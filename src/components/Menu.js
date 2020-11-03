import logo from  './img/Group 1.png';
import './style.css';
import React,{useState,useEffect} from "react";
import { Link, withRouter } from "react-router-dom";


const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#000", fontWeight: "500" };
  } else {
    return { color: "#000" };
  }
};
const Menu = ({ history }) => {
 const [navbar,setNavbar]= useState(false);
 const changeBackground= () =>{
if(window.scrollY >=80){
  setNavbar(true);
}else{
  setNavbar(false);
}
 }
 window.addEventListener('scroll',changeBackground);
    return(
  
      <nav className={navbar ? 'navbar active navbar-expand-lg sticky-top' :'navbar navbar-expand-lg sticky-top' }>
     <div className="container">
        <a class="navbar-brand logo" href="#"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"><i class="fa fa-bars" aria-hidden="true"></i>
      </span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav navbar-center">
            <li class="nav-item active">
            <Link class="nav-link" to="/Incognito-Website">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/About">About</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/Team">Team</Link>
            </li> <li class="nav-item">
            <Link class="nav-link" to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
)

}
export default withRouter(Menu);
