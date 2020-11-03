import React from "react";
import Menu from "./Menu";
import Banner from "./Banner";
import Thought from "./Thought";
import Adv from "./Adv";
import Team from "./Core_Team/Team-sec";
import About from "./About_us/About-sec";
import Promo from "./Promo";
import Domain from "./Domain"
import Footer  from "./Footer"

const Home = () => {
  return (
    <>
      <Banner />
      <Thought/>
      <Promo/>
      <About/>
      <Adv/>
<Team/>
<Domain/>
<Footer/>

    </>
  );
};

export default Home;