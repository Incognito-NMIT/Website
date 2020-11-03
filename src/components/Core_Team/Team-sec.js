import React from 'react';
import '../style.css';
import p1 from '../img/p1.png'
import p2 from '../img/p2.png'

import p3 from '../img/p3.png'
import p4 from '../img/p4.png'
import p5 from '../img/p5.png'

import p6 from '../img/p6.png'
import p7 from '../img/p7.png'
import p8 from '../img/p8.png'
import p9 from '../img/p9.png'
import p10 from '../img/p10.png'
import p11 from '../img/p11.png'
import p12 from '../img/p12.png'
import Member from '../Member';
function Team()
{
    return(
        <section id="team">
        <div class="container">
        <span class="small-text"> CORE TEAM</span>

          <h1 className="head-blue">Meet our Colours</h1>

          <div class="row ">
      
          <Member />

     <Member img_p={p1} name="Ranavijay Singh" />

     <Member img_p={p2} name="Snighdha Sandeep" />
     <Member />
</div>
     <div class="row">
      
     <Member img_p={p3} name="Ritika Shrestha" />
     <Member img_p={p4} name="Purnima Sharma" />
     <Member img_p={p5} name="Devesh Mirani" />

     <Member img_p={p6} name="Harsh Kumar" />
     <Member img_p={p7} name="Sayantan Gosh" />
     <Member img_p={p8} name="Vivek Narayan" />
     <Member img_p={p9} name="Rose Cherian" />
     <Member img_p={p10} name="Harshitha Karthigeyan" />
     <Member img_p={p12} name="Ayesha Nomani" />
     <Member img_p={p11} name="Rituraj Pandey" />

</div>
        </div>
      </section>
  
  

)

};
export default Team;