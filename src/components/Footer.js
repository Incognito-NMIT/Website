import React from 'react';
import './style.css';
import logo from './img/white_logo.png';
import { Link, withRouter } from "react-router-dom";

function Footer()
{
    return(
<footer class="page-footer font-small blue pt-4">

<div class="container text-center text-md-left">

  <div class="row">

    <div class="col-md-4 mt-md-0 mt-3">

      <img src={logo}/>
     
    </div>
<div class="col-md-3 text-center">
<h5 class="text-uppercase pt-2">Why Incognito?</h5>

<p>We believe that together, we can help each other grow.
      Our vision is to give direction to the students.<br/>Incognito Community is for the student by the student.
      </p></div>
    <hr class="clearfix w-100 d-md-none pb-3"/>

    <div class="col-md-2 mb-md-0 mb-3 text-center">

      <h5 class="text-uppercase">Links</h5>

      <ul class="list-unstyled">
        <li>
         <Link to="/">Home</Link>
        </li>
        <li>
         <Link to="/About">About</Link>
        </li>
        <li>
         <Link to="/Team">Team</Link>
        </li>
      </ul>

    </div>
    <div class="col-md-2 mb-md-0 mb-3">

      <h5 class="text-uppercase">Contact us</h5>

      <ul class="list-unstyled text-center">
        <li>
        <a href="mailto:incognito.community@gmail.com"><i class="fa fa-envelope"></i></a>
        </li>
        
        <li>
          <a href="https://www.instagram.com/incognitocommunity/?igshid=1dx6njxccn049"><i class="fa fa-instagram"></i></a>
        </li>
        <li>
          <a href="https://github.com/Incognito-NMIT/"><i class="fa fa-github"></i></a>
        </li>
      </ul>

    </div>

</div>
</div>
<div class="footer-copyright text-center py-3">© 2020 Copyright:
  <a href="https://mdbootstrap.com/">Incognito </a>| Made by Purnima Sharma 
</div>

</footer>
)

};
export default withRouter(Footer);
