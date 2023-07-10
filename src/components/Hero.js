import React from "react";
import { Link } from "gatsby";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-box">
          <h1 className="hero-heading">Automate your processess with us.</h1>
          <p className="hero-desc">
           At our company, we offer a comprehensive suite of services to cater to your business needs and help you achieve your goals.
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
