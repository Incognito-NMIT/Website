import React from 'react';
import '../style.css';
import logo from '../img/logo3.png';
import a1 from '../img/a1.png';
import a2 from '../img/a2.png';
import a3 from '../img/a3.png';
import a4 from '../img/a4.png';
import a5 from '../img/a5.png';
import a6 from '../img/a6.png';

import Card from '../Card';
function About()
{
    return(
<section id="about">
<div className="container">
   <div className="about-content">
   <span class="small-text"> ABOUT US</span>

<h4 className="about-head">Our Mission</h4>
<div className="row">
    <div className="col-md-4 col1">
  
<Card icon={a1} para="We organize tech talks and webinars online . We invite speakers who have an expertise in their specific domains and have already proven their mettle.

"/>
<Card icon={a2} para="We help our followers to get easy access to the study materials and resources informative tech talk session which helps them learn and build amazing projects.
"/>
<Card icon={a3} para="We urge our members and followers to develop good networking with industry experts and their fellow mates, so as to help each other in the process of growth.



"/>





    </div>
    <div className="col-md-4 col2"  data-aos="zoom-in"><img src={logo} alt=""/></div>
    <div className="col-md-4 col3">
    <Card icon={a4} para="We will constantly provide you with opportunities to test your knowledge, by conducting various competitions and quizzes in inter as well as intra college levels, and also national levels!


" />
    <Card icon={a5} para="Finding like minded people who resonate with your goal is extremely important. Find such enthusiastic people through Incognito's  network.



"/>
    <Card icon={a6} para="Our vision is to give every student an equal opportunity to learn anything and everything they wish to learn, we will strive everyday taking into consideration the inputs given from your side. 
"/>

    </div>

</div>
   </div>
</div>
</section>

)

};
export default About;