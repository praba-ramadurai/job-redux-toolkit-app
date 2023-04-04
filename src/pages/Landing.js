import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import Logo from "../components/Logo";
import {main} from '../'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span>app
          </h1>
        <p>
          Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
          fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
          crucifix heirloom meggings bicycle rights.
        </p>
        <button>Login/Register</button>
      </div>
      <img src={main} alt='Job Hunt' className="img main-img"/>
      </div>

    </Wrapper>
  );
};

export default Landing;
