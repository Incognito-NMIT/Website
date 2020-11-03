import React from 'react';
import logo from  './img/Group 1.png';
import './style.css';
import build from './img/urban-buildings.png';
function Banner()
{
    return(
<section id="banner">
<div className="container">
    <div class="box"   data-aos="fade-left">
    <h4>Inspire.idealise.innovate.implement</h4>

        <h1>Incognito<br/> Community</h1>
        <p><i class="bulding"><img src={build}/></i> <span class="college">Nitte Meenakshi Institute of Technology,Bangalore</span></p>
        <p class="content">We strive to inspire young minds to learn much more than their academic curriculum,innovate new technologies and implement them and have conducted  many events including hackathon.tech fests etc.</p>
        <a href="" type="button" class="btn ">Get Started</a>
    </div>
</div>
</section>

)

};
export default Banner;