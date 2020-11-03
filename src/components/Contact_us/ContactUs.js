import React from "react";
import Footer from "../Footer"
import Header from "../Header"
import Domain from "../Domain"

const Contact = () => {
  return (
    <>
    <Header title="CONTACT US"/>
    <section id="contact_us">
<div className="conatiner">
<div class="row ">

<div class="card col-md-3 ml-5">
<div class="contact-info">
  <i class="card-icon fa fa-envelope">
  </i>
  <h4>incognito.community@gmail.com</h4>
  </div>
</div>     
<div class="card col-md-3 ml-5">
<div class="contact-info">
  <i class="card-icon fa fa-phone">
  </i>
  <h4>+91 99360 71415</h4>
  </div>
</div>     
<div class="card col-md-3 ml-5">
<div class="contact-info">
  <i class="card-icon fa fa-map-marker">
  </i>
  <h4>Nitte Meenakshi Institute of Technology,Banagalore</h4>
  </div>
</div>     


</div>
    </div></section>
<Domain/>
    <Footer/>
    </>
  );
};

export default Contact;