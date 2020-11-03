import React from 'react';
import './style.css';
import img1 from '../components/img/img_1.png';
import img2 from '../components/img/img_2.png';
import img3 from '../components/img/img_3.png';
import img4 from '../components/img/img_4.png';
import img5 from '../components/img/img_5.png';


function Thought()
{
    return(
<section id="thought">
<div className="container-fluid">
<div className="quote mx-auto" data-aos="zoom-in">
<span class="small-text" data-aos="zoom-in"> INSPIRE.IDEALISE.INNOVATE.IMPLEMENT</span>
    <p>With our motto "inspire, idolize and inovate" , we aspire to give each one of you, irrespective a beginner or a master, a platform to widen your knowledge, in your areas of expertise or interest. 
</p></div></div>
<div className="scroll-img">
    <div class="img-a"  data-aos="fade-up"><img src={img1}></img></div>
    <div class="img-b" data-aos="fade-out-right"><img src={img2}></img></div>
    <div class="img-c" data-aos="fade-down-right
"><img src={img3}></img></div>
    <div class="img-d" data-aos="fade-right"><img src={img4}></img></div>
    <div class="img-e" data-aos="fade-down"><img src={img5}></img></div>

</div>

</section>

)

};
export default Thought;