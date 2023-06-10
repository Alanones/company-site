import React from "react";
import { Link } from "gatsby";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-box">
          <h1 className="hero-heading">Automate your processess with us.</h1>
          <p className="hero-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quibusdam quis officia vel dicta. Officia
            facilis ipsum expedita placeat quos.
          </p>
          <div className="btn-box">
            <Link to="/about" className="cta-btn try">
              Learn More
            </Link>
            <Link to="/contact" className="cta-btn demo">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
