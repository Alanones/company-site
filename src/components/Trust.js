import React from "react";
import trust from "../constants/trust";
import { Link } from "gatsby";

const Trust = () => {
  return (
    <section className="section bg-trust">
      <div className="section-title">
        <h2 style={{ color: "white" }}>WHY CHOOSE US</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center trust-center">
        {trust.map((t) => {
          const { id, icon, title, text } = t;
          return (
            <article key={id} className="trust">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
      <div className="trust-btn">
        <Link to="/contact" className="btn">
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default Trust;
